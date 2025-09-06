require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

app.use(cors());
app.use(express.json()); // Fix 1: Added parentheses

app.post('/api/recipes', async (request, response) => { // Fix 2 & 4: Corrected parameter name
    const ingredients = request.body.ingredients;

    const rawRecipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}`);
    const formattedRecipes = await rawRecipes.json();

    response.json(formattedRecipes); // Fix 4: Corrected parameter name
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});