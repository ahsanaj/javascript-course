// if(CONDITION){
// CODE TO EXECUTE
// }

if (3 === 3) {
    console.log("Maths makes sense");
}

var favMovie = "The butterfly effect";

if (favMovie === "The butterfly effect") {
    console.log("I think that is a good choice");
}

var playerOneMove = "Scissors";

// If playerOneMove is Scissors
//Print out "Player one played scissors"

if (playerOneMove === "Scissors") {
    console.log("Player one played scissors");
}

// Store a computerNumber
// Store a usersGuess between 1 and 50 inclusive
// IF computerNumber is less than userGuess
//Print out "The number is lower"

var randomNumber = Math.floor(Math.random() * 50);
var userGuess = 39;

console.log(randomNumber);

if (randomNumber < userGuess) {
    console.log("The number is lower");
}

// if(CONDITION){
// CODE TO EXECUTE IF TRUE
// } else {
// CODE TO EXECUTE IF FALSE
// }

// Store a user number
// If the user number is greater than 0
//Print out "It's a positive number"
//Otherwise
//Print out "It's a negative number"

var userNumber = 10;

if (userNumber > 0) {
    console.log("It's a positive number");
} else {
    console.log("It's a negative number");
}

// Store the user course
// If userCourse is JSD
//You are learning JavaScript
//Else,
// We don't know what you are learning.
// Might be blockchain

var userCourse = "JSD";

if (userCourse === "JSD") {
    console.log("You are learning JavaScript");
} else {
    console.log("We don't know what you are learning, might be blockchain");
}

var vehicle = "Car";

if (vehicle === "Car") {
    console.log("You are driving a car");
} else if (vehicle === "Motorbike") {
    console.log("You are in a motorbike");
} else {
    console.log("We don't know what you are driving");
}