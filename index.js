require('dotenv').config();


const express = require('express');
const app = express();
app.use(express.json);
const port = 3000;
const apiKey = process.env.SPOONACULAR_API_KEY;

async app.post('/api/recipes', (request, respone) => {
  const ingredients = request.body.ingredients;

  const rawRecipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}`)
  const formattedRecipes = await rawRecipes.json()

  res.json(formattedRecipes)

});

