require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const path = require('path');

app.use(cors());
app.use(express.json());

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle the recipe API request
app.post('/api/recipes', async (request, response) => {
    const ingredients = request.body.ingredients;

    const rawRecipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}`);
    const formattedRecipes = await rawRecipes.json();

    response.json(formattedRecipes);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});