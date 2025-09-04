const searchButton = document.getElementById('searchButton');
const ingredientList = document.getElementById('ingredients');


searchButton.addEventListener('click', function() {

    const ingredients = ingredientList.value;
    
    console.log(ingredients);
});

const sepIngredients = ingredients.split(",")

const formattedIngredients = sepIngredients.map(ingredient => {return ingredient.trim()})

const apiCall = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedIngredients}`&apiKey=number=2;

//https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients