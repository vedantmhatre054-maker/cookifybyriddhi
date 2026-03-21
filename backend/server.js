require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5001;
const API_KEY = process.env.SPOONACULAR_API_KEY;

// 🔹 Get recipes by ingredients
app.get('/recipes', async (req, res) => {
  const query = req.query.query;

  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/findByIngredients',
      {
        params: {
          ingredients: query,
          number: 10,
          apiKey: API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// 🔹 Get recipe details
app.get('/recipe/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${req.params.id}/information`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch recipe details' });
  }
});

// 🔹 Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});