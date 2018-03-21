// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2018;

var birthYear = 1990;

// Definining function to calculate the age, it takes two paramenters and returns the result by substracting those parameters
function calculateAge(cYear, bYear) {
    return (cYear - bYear);
}

// Output to the screen
console.log("You are either " + calculateAge(currentYear, birthYear) + " or " + calculateAge(birthYear, currentYear));