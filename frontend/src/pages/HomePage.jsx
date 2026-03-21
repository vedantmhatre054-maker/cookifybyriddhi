import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stateDishes } from "../data/stateDishes";
import { cuisineImages } from "../data/cuisineImages";

export default function HomePage() {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const navigate = useNavigate();

  const addIngredient = () => {
    if (!ingredient.trim()) return;
    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  };

  const handleSearch = () => {
    navigate("/recipes", { state: { ingredients } });
  };

  const cuisines = [
    "Indian",
    "Italian",
    "Chinese",
    "Mexican",
    "Japanese",
    "Thai",
  ];

  const indianStates = [
    "Punjab",
    "Maharashtra",
    "Gujarat",
    "South Indian",
    "Rajasthan",
    "Bengal",
  ];

  return (
    <div style={container}>
      {/* HERO */}
      <div style={hero}>
        <h1 style={title}>🍳 Cookify</h1>
        <p style={subtitle}>
          Discover recipes from your kitchen ingredients
        </p>

        {/* INPUT */}
        <div style={inputWrapper}>
          <input
            type="text"
            placeholder="Add ingredient (e.g. Chicken, Rice)"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            style={input}
          />

          <button onClick={addIngredient} style={addBtn}>
            + Add
          </button>
        </div>

        {/* TAGS */}
        <div style={tagContainer}>
          {ingredients.map((item, index) => (
            <span key={index} style={tag}>
              {item}
            </span>
          ))}
        </div>

        {/* SEARCH BUTTON */}
        <button style={searchBtn} onClick={handleSearch}>
          Find Recipes →
        </button>
      </div>

      {/* CUISINES */}
      <h2 style={sectionTitle}>Explore Cuisines 🌍</h2>

      <div style={cuisineGrid}>
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            style={{
              ...cuisineCard,
              transform:
                selectedCuisine === cuisine
                  ? "scale(1.05)"
                  : "scale(1)",
              border:
                selectedCuisine === cuisine
                  ? "2px solid #22c55e"
                  : "none",
            }}
            onClick={() => {
              setSelectedCuisine(cuisine);
              setSelectedState("");
            }}
          >
            <img
              src={
                cuisineImages?.[cuisine] ||
                "https://via.placeholder.com/150"
              }
              alt={cuisine}
              style={cuisineImage}
            />

            <div style={overlay}>
              <p style={cuisineText}>{cuisine}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STATES */}
      {selectedCuisine === "Indian" && (
        <>
          <h2 style={sectionTitle}>Indian States 🇮🇳</h2>

          <div style={chipContainer}>
            {indianStates.map((state, index) => (
              <button
                key={index}
                style={{
                  ...chip,
                  background:
                    selectedState === state
                      ? "#22c55e"
                      : "#f1f5f9",
                  color:
                    selectedState === state
                      ? "#fff"
                      : "#000",
                }}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </button>
            ))}
          </div>

          {/* DISHES */}
          {selectedState && (
            <>
              <h3 style={sectionTitle}>
                Popular Dishes 🍽️ ({selectedState})
              </h3>

              <div style={chipContainer}>
                {stateDishes[selectedState]?.map(
                  (dish, index) => (
                    <button
                      key={index}
                      style={dishChip}
                      onClick={() =>
                        navigate("/recipes", {
                          state: { searchQuery: dish },
                        })
                      }
                    >
                      {dish}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </>
      )}

      {/* OTHER CUISINES */}
      {selectedCuisine &&
        selectedCuisine !== "Indian" && (
          <button
            style={viewBtn}
            onClick={() =>
              navigate("/recipes", {
                state: { cuisine: selectedCuisine },
              })
            }
          >
            View {selectedCuisine} Recipes →
          </button>
        )}
    </div>
  );
}

/* 🔥 PREMIUM STYLES */

const container = {
  padding: "40px",
  maxWidth: "1000px",
  margin: "auto",
};

const hero = {
  textAlign: "center",
  marginBottom: "40px",
};

const title = {
  fontSize: "36px",
  fontWeight: "bold",
};

const subtitle = {
  color: "#666",
  marginBottom: "25px",
};

const inputWrapper = {
  display: "flex",
  gap: "10px",
  maxWidth: "600px",
  margin: "auto",
};

const input = {
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const addBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer",
};

const tagContainer = {
  marginTop: "15px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center",
};

const tag = {
  background: "#e2e8f0",
  padding: "6px 12px",
  borderRadius: "20px",
};

const searchBtn = {
  marginTop: "20px",
  background: "#111",
  color: "white",
  padding: "14px 24px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
};

const sectionTitle = {
  margin: "25px 0 15px",
  textAlign: "center",
};

const cuisineGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "20px",
};

const cuisineCard = {
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  transition: "0.3s",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};

const cuisineImage = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
};

const overlay = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  textAlign: "center",
  padding: "8px",
};

const cuisineText = {
  fontWeight: "bold",
};

const chipContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
};

const chip = {
  padding: "10px 16px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
};

const dishChip = {
  padding: "10px 16px",
  borderRadius: "20px",
  background: "#fde68a",
  border: "none",
  cursor: "pointer",
};

const viewBtn = {
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  background: "#ff6b6b",
  color: "white",
  padding: "14px 24px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
};