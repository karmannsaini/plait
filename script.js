const searchButton = document.getElementById('searchButton');
const ingredientList = document.getElementById('ingredients');

searchButton.addEventListener('click', async function(event) {
    event.preventDefault();

    const ingredients = ingredientList.value;
    const sepIngredients = ingredients.split(",");
    const formattedIngredients = sepIngredients.map(ingredient => {
        return ingredient.trim();
    });

    const response = await fetch('https://plait.onrender.com/api/recipes', {
        method: 'POST',
        body: JSON.stringify({
            ingredients: formattedIngredients
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const recipes = await response.json();

    const recipesContainer = document.getElementById('recipes-container');

    const recipeHTML = recipes.map(recipe => {
        return `
            <div class="recipe">
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
        `;
    }).join('');

    recipesContainer.innerHTML = recipeHTML;

});