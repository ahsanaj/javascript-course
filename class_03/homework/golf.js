// Golf
// Using the condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// Condition exercise
// Write an if statement that gives a user the nickname of their score, based on par.

// Score	Nickname
// 1	"Hole in one"
// <= par - 2	"Eagle"
// par - 1	"Birdie
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Not sure"

// var par = 6;

// var score = 2;

// var nickname;

// if (score === 1) {
//     nickname = "Hole in one";
// } else if (score <= par - 2) {
//     nickname = "Eagle";
// } else if (score === par - 1) {
//     nickname = "Birdie";
// } else if (score === par) {
//     nickname = "Par";
// } else if (score === par + 1) {
//     nickname = "Bogey";
// } else if (score === par + 2) {
//     nickname = "Double Bogey";
// } else if (score >= par + 2) {
//     nickname = "Not sure";
// }

// console.log(nickname);
var nickname;

for (var par = 5; par >= 3; par -= 2) {

    for (var score = 1; score <= 8; score++) {
        if (score === 1) {
            nickname = "Hole in one";
        } else if (score <= par - 2) {
            nickname = "Eagle";
        } else if (score === par - 1) {
            nickname = "Birdie";
        } else if (score === par) {
            nickname = "Par";
        } else if (score === par + 1) {
            nickname = "Bogey";
        } else if (score === par + 2) {
            nickname = "Double Bogey";
        } else if (score >= par + 2) {
            nickname = "Not sure";
        }
        console.log(nickname);
    }

}