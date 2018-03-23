// Pseudocode – Rock, paper and scissors game for a single game
// STORE the Player 1’s hand sign as player1Go
// STORE the Player 2’s hand sign as player2Go
// STORE the hand count as handCount and SET the value to be 0
// For EVERY SECOND - INCREMENT handCount by 1 and SET RANDOM value for player1Go and player2Go
// IF handCount === 3
// CHECK player1Go and player2Go values
// IF player1Go === “rock” && player2Go === “scissor”
// Player 1 Wins
// IF player1Go === “scissor” && player2Go === “rock”
// Player 2 Wins
// IF player1Go === “rock” && player2Go === “paper”
// Player 2 Wins
// IF player1Go === “paper” && player2Go === “rock”
// Player 1 Wins
// IF player1Go === “scissor” && player2Go === “paper”
// Player 1 Wins
// IF player1Go === “paper” && player2Go === “scissor”
// Player 2 Wins

// Declaring variables to store players hand signs
var player1RandomHandSign, player2RandomHandSign;

// Declaring handSigns Array to store hand signs
var handSigns = ["rock", "paper", "scissors"];

// Declaring the variable to store the Win Count
var player1WinCount = 0,
    player2WinCount = 0;

// Declaring the variable to store the Round Count    
var roundCount = 0;

// Declaring the variable to store the total number of rounds to Win the Game
var totalRoundsToWinGame = 2;

// Declaring the function to generate random hand signs. Since the game requires to keep changing the sign three times before the outcome, a for loop is used which will loop three times; and on each loop random Player 1 and Player 2 hand signs are selected from the array

function randomHandSignGenerator() {
    for (var handCount = 0; handCount < 3; handCount += 1) {
        // Storing a random player 1 hand sign from an array by using the Math.Random function
        player1RandomHandSign = handSigns[Math.floor(Math.random() * 3)];

        // Storing a random player 2 hand sign from an array by using the Math.Random function
        player2RandomHandSign = handSigns[Math.floor(Math.random() * 3)];
    }
}

// Declare=ing the fucntion to check the hand signs, decide who has won the game and then return the result
function pickTheWinner(player1Go, player2Go) {
    var result;
    if (player1Go === "rock" && player2Go === "scissors") {
        result = "Player 1 has won the game";
        player1WinCount += 1;

    } else if (player1Go === "scissors" && player2Go === "rock") {
        result = "Player 2 has won the game";
        player2WinCount += 1;

    } else if (player1Go === "rock" && player2Go === "paper") {
        result = "Player 2 has won the game";
        player2WinCount += 1;

    } else if (player1Go === "paper" && player2Go === "rock") {
        result = "Player 1 has won the game";
        player1WinCount += 1;

    } else if (player1Go === "paper" && player2Go === "scissors") {
        result = "Player 2 has won the game";
        player2WinCount += 1;

    } else if (player1Go === "scissors" && player2Go === "paper") {
        result = "Player 1 has won the game";
        player1WinCount += 1;

    } else if (player1Go === player2Go) {
        result = "The game has ended in a draw, this round will be re-played";

    } else {
        result = "Something went wrong! This round will be re-played";
    }
    roundCount += 1;
    console.log("/*******************Round " + (roundCount) + "********************/");
    console.log("Player 1 hand sign = " + player1RandomHandSign);
    console.log("Player 2 hand sign = " + player2RandomHandSign);
    console.log(result);
}
// Declaring the function to print out the results to the screen by checking the Player1 and Player2 Win Count.
function printOutTheResults() {

    console.log("/*******************Results are shown below********************/");

    if (player1WinCount > player2WinCount) {

        console.log("Player 1 has won the series by winning " + player1WinCount + " games.");

        // Print out just game instead of games if the player has only won a single game
        if (player2WinCount === 1) {
            console.log("Player 2 has won only " + player2WinCount + " game.");
        } else {
            console.log("Player 2 has won " + player2WinCount + " games.");
        }
    } else {

        console.log("Player 2 has won the series by winning " + player2WinCount + " games.");

        // Print out just game instead of games if the player has only won a single game
        if (player1WinCount === 1) {
            console.log("Player 1 has won only " + player1WinCount + " game.");
        } else {
            console.log("Player 1 has won " + player1WinCount + " games.");
        }
    }
}

// While loop will run unless (player1WinCount or player2WinCount) === totalRoundsToWinGame 
while (player1WinCount < totalRoundsToWinGame && player2WinCount < totalRoundsToWinGame) {

    randomHandSignGenerator();
    pickTheWinner(player1RandomHandSign, player2RandomHandSign);

}

printOutTheResults();