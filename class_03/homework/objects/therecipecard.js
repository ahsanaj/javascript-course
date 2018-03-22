// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favouriteRecipe = {
    title: 'Chicken Biryani',
    servings: 4,
    ingredients: ["whole chicken", "rice", "chilli powder", "biryani masala", "yogurt", "corriander"]
}

console.log(favouriteRecipe.title);

console.log("Serves: " + favouriteRecipe.servings);

console.log("Ingredients:");

var ingredientsArray = favouriteRecipe.ingredients;

for (var index = 0; index < ingredientsArray.length; index += 1) {
    console.log(ingredientsArray[index]);
}