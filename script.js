const searchButton = document.getElementById('searchButton');
const ingredientList = document.getElementById('ingredients');

searchButton.addEventListener('click', function() {

    const ingredients = ingredientList.value;
    
    console.log(ingredients);
});

