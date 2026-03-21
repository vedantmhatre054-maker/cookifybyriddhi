import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getRandomRecipes,
  getRecipesByCuisine,
  getRecipesFromSpoonacular,
} from "../services/recipeService";
import { customRecipes } from "../data/customRecipes";

export default function RecipeListPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedIngredients = location.state?.ingredients || [];
  const selectedCuisine = location.state?.cuisine || "";
  const searchQuery = location.state?.searchQuery || "";

  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [vegOnly, setVegOnly] = useState(false);
  const [onlyCookable, setOnlyCookable] = useState(false);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      let data;

      if (selectedCuisine) {
        data = await getRecipesByCuisine(selectedCuisine);
      } else {
        data = await getRandomRecipes();
      }

      const detailed = await Promise.all(
        data.slice(0, 15).map(async (item) => {
          const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`
          );
          return res.data.meals[0];
        })
      );

      const allRecipes = [...detailed, ...customRecipes];

      setRecipes(allRecipes);
      setFiltered(allRecipes);
    } catch (err) {
      console.error(err);
      setRecipes([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 SMART MATCH
  const isMatch = (ingredient, userInput) => {
    const ing = ingredient.toLowerCase();
    const input = userInput.toLowerCase();
    return ing.includes(input) || input.includes(ing);
  };

  // 🔥 INGREDIENT EXTRACTOR
  const getIngredients = (recipe) => {
    if (recipe.spoonacular) {
      const used =
        recipe.usedIngredients?.map((i) =>
          i.name.toLowerCase()
        ) || [];

      const missed =
        recipe.missedIngredients?.map((i) =>
          i.name.toLowerCase()
        ) || [];

      return [...used, ...missed];
    }

    const list = [];

    for (let i = 1; i <= 20; i++) {
      let ing = recipe[`strIngredient${i}`];

      if (ing && ing.trim() !== "") {
        ing = ing.toLowerCase().trim();

        if (
          ing.length > 20 ||
          ing.includes("add") ||
          ing.includes("mix") ||
          ing.includes("cook") ||
          ing.includes("heat") ||
          ing.includes("stir")
        ) {
          continue;
        }

        list.push(ing);
      }
    }

    return list;
  };

  // 🔥 MAIN FILTER LOGIC (FINAL FIX)
  useEffect(() => {
    let temp = [...recipes];

    // ❌ REMOVE BEEF
    temp = temp.filter((recipe) => {
      const ingredients = getIngredients(recipe);
      return !ingredients.some((ing) => ing.includes("beef"));
    });

    // 🟢 VEG FILTER
    if (vegOnly) {
      temp = temp.filter((recipe) => {
        const ingredients = getIngredients(recipe);

        return ![
          "chicken",
          "pork",
          "fish",
          "lamb",
          "mutton",
          "egg",
        ].some((nonVeg) =>
          ingredients.some((ing) => ing.includes(nonVeg))
        );
      });
    }

    // 🔍 INGREDIENT FILTER
    if (selectedIngredients.length > 0) {
      const result = temp.filter((recipe) => {
        const ingredients = getIngredients(recipe);
        const name = recipe.strMeal?.toLowerCase() || "";

        return selectedIngredients.some((userIng) =>
          ingredients.some((ing) =>
            isMatch(ing, userIng)
          ) || name.includes(userIng.toLowerCase())
        );
      });

      if (result.length > 0) temp = result;
    }

    // 🔥 DISH SEARCH (KEY FIX)
    if (searchQuery) {
      const result = temp.filter((recipe) => {
        const name = recipe.strMeal?.toLowerCase() || "";
        return name.includes(searchQuery.toLowerCase());
      });

      if (result.length > 0) temp = result;
    }

    // 🍳 COOKABLE FILTER
    if (onlyCookable && selectedIngredients.length > 0) {
      const result = temp.filter((recipe) => {
        const ingredients = getIngredients(recipe);

        return ingredients.every((ing) =>
          selectedIngredients.some((userIng) =>
            isMatch(ing, userIng)
          )
        );
      });

      if (result.length > 0) temp = result;
    }

    // 🔥 FINAL FALLBACK (NO BLANK PAGE)
    if (temp.length === 0) {
      setFiltered(recipes);
    } else {
      setFiltered(temp);
    }
  }, [recipes, selectedIngredients, vegOnly, onlyCookable, searchQuery]);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading recipes...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipes 🍽️</h1>

      {/* FILTERS */}
      <div style={toggleContainer}>
        <label>
          Veg Only 🌱
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={() => setVegOnly(!vegOnly)}
          />
        </label>

        <label>
          Cookable Only 🍳
          <input
            type="checkbox"
            checked={onlyCookable}
            onChange={() =>
              setOnlyCookable(!onlyCookable)
            }
          />
        </label>
      </div>

      {/* PANTRY */}
      {(selectedIngredients.length > 0 || searchQuery) && (
        <p>
          Searching for:{" "}
          <b>
            {searchQuery ||
              selectedIngredients.join(", ")}
          </b>
        </p>
      )}

      {/* GRID */}
      <div style={grid}>
        {filtered.map((recipe) => {
          const recipeIngredients =
            getIngredients(recipe);

          const matched = recipeIngredients.filter((ing) =>
            selectedIngredients.some((userIng) =>
              isMatch(ing, userIng)
            )
          );

          const missing = recipeIngredients.filter(
            (ing) =>
              !selectedIngredients.some((userIng) =>
                isMatch(ing, userIng)
              )
          );

          return (
            <div
              key={recipe.idMeal}
              style={card}
              onClick={() =>
                navigate(`/recipe/${recipe.idMeal}`)
              }
            >
              <img
                src={
                  recipe.strMealThumb ||
                  "https://via.placeholder.com/200"
                }
                alt={recipe.strMeal}
                style={image}
              />

              <p>{recipe.strMeal}</p>

              <p style={{ color: "green", fontSize: "12px" }}>
                ✅ You have:{" "}
                {matched.length > 0
                  ? matched.slice(0, 3).join(", ")
                  : "None"}
              </p>

              <p style={{ color: "red", fontSize: "12px" }}>
                ❌ Missing:{" "}
                {missing.length > 0
                  ? missing.slice(0, 3).join(", ")
                  : "None"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* STYLES */

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  border: "1px solid #eee",
  borderRadius: "12px",
  padding: "10px",
  textAlign: "center",
  cursor: "pointer",
};

const image = {
  width: "100%",
  borderRadius: "10px",
};

const toggleContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "15px",
};