import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "#111",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/")}
      >
        Cookify 🍳
      </h2>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          onClick={() => navigate("/")}
          style={btnStyle}
        >
          Home
        </button>

        <button
          onClick={() => navigate("/recipes")}
          style={btnStyle}
        >
          Recipes
        </button>
      </div>
    </nav>
  );
}

// 🔹 Button Style (clean reusable)
const btnStyle = {
  background: "#ff6b6b",
  border: "none",
  padding: "8px 16px",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
};