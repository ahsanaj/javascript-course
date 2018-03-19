// The Age Calculator Program

var currentYear = 2018;

var birthYear = 1990;

// Definining function to calculate the age, it takes two paramenters and returns the result by substracting those parameters
function calculateAge(cYear, bYear) {
    return (cYear - bYear);
}

// Output to the screen
console.log("You are either " + calculateAge(currentYear, birthYear) + " or " + calculateAge(birthYear, currentYear));