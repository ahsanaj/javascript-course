// Golf
// Write an if statement that gives a user the nickname of their score, based on par.

// Score	Nickname
// 1	"Hole in one"
// <= par - 2	"Eagle"
// par - 1	"Birdie
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Not sure"

var par = 6;

var score = 2;

var nickname;

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