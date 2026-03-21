import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/* 🔹 Get all recipes (default) */
export const getRandomRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=`);
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

/* 🔹 Get recipes by cuisine */
export const getRecipesByCuisine = async (cuisine) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/filter.php?a=${cuisine}`
    );
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching cuisine recipes:", error);
    return [];
  }
};

/* 🔹 Get recipe details */
export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/lookup.php?i=${id}`
    );
    return response.data.meals[0] || null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

/* 🔥 SPOONACULAR FALLBACK */
export const getRecipesFromSpoonacular = async (ingredients = []) => {
  try {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    if (!apiKey) {
      console.warn("⚠️ Spoonacular API key missing");
      return [];
    }

    const query = ingredients.join(",");

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`,
      {
        params: {
          ingredients: query,
          number: 10,
          apiKey: apiKey,
        },
      }
    );

    // 🔥 Convert to your app format
    return response.data.map((item) => ({
      idMeal: item.id.toString(),
      strMeal: item.title,
      strMealThumb: item.image,
      spoonacular: true, // mark source
      usedIngredients: item.usedIngredients || [],
      missedIngredients: item.missedIngredients || [],

    }));
  } catch (error) {
    console.error("Error fetching Spoonacular recipes:", error);
    return [];
  }
};