const recipes = [];

document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const recipeId = document.getElementById('recipe-id').value;
    const recipeName = document.getElementById('recipe-name').value;
    const recipeIngredients = document.getElementById('recipe-ingredients').value;

    if (recipeId) {
        // Editing an existing recipe
        recipes[recipeId].name = recipeName;
        recipes[recipeId].ingredients = recipeIngredients;
    } else {
        // Adding a new recipe
        const recipe = { name: recipeName, ingredients: recipeIngredients };
        recipes.push(recipe);
    }

    displayRecipes();
    resetForm();
});

function displayRecipes() {
    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';
    
    recipes.forEach((recipe, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${recipe.name}
            <span>
                <button onclick="editRecipe(${index})">Edit</button>
                <button onclick="deleteRecipe(${index})">Delete</button>
            </span>
        `;
        recipeList.appendChild(listItem);
    });
}

function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('recipe-id').value = index;
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('recipe-ingredients').value = recipe.ingredients;
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
    resetForm();
}

function resetForm() {
    document.getElementById('recipe-form').reset();
    document.getElementById('recipe-id').value = '';
}

displayRecipes();
