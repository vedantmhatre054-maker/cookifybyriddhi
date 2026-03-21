import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { customRecipes } from "../data/customRecipes";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    loadRecipe();
  }, [id]);

  const loadRecipe = async () => {
    try {
      // 🔥 1. CHECK CUSTOM RECIPES FIRST
      const local = customRecipes.find((r) => r.idMeal === id);

      if (local) {
        setRecipe(local);
        return;
      }

      // 🔥 2. ELSE FETCH FROM API
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      setRecipe(res.data.meals[0]);
    } catch (err) {
      console.error(err);
    }
  };

  if (!recipe) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  // 🔥 EXTRACT INGREDIENTS
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ing && ing.trim() !== "") {
      ingredients.push(`${measure || ""} ${ing}`);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={backBtn}>
        ← Back
      </button>

      <h1>{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={image}
      />

      {/* 🔥 INGREDIENTS */}
      <h2>Ingredients 🧾</h2>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* 🔥 INSTRUCTIONS */}
      <h2>Instructions 👨‍🍳</h2>
      <p style={instructions}>
        {recipe.strInstructions}
      </p>
    </div>
  );
}

/* 🔥 STYLES */

const image = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "10px",
  marginBottom: "20px",
};

const instructions = {
  lineHeight: "1.6",
  maxWidth: "600px",
};

const backBtn = {
  background: "#111",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  marginBottom: "20px",
  cursor: "pointer",
};