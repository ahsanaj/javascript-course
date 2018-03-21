// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the current year using JavaScript!

var currentAge = 28;
var maxAge = 90;
var perDayAmount = 10;

// Bonus: This gives us the current year
var currentYear = new Date().getFullYear();

// Output to the screen
console.log("You will need " + (maxAge - currentAge) * perDayAmount + " to last you until the ripe old age of " + maxAge);