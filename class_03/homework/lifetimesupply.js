// The Lifetime Supply Calculator

var currentAge = 28;
var maxAge = 90;
var perDayAmount = 10;

// Bonus: This gives us the current year
var currentYear = new Date().getFullYear();

// Output to the screen
console.log("You will need " + (maxAge - currentAge) * perDayAmount + " to last you until the ripe old age of " + maxAge);