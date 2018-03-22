// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

//Conditional Exercise
// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results

// var testResult = "D";

// if (testResult === "A") {
//     console.log("Your score is 90% or higher");
// } else if (testResult === "B") {
//     console.log("Your score is between 80% and 89%");
// } else if (testResult === "C") {
//     console.log("Your score is between 70% and 79%");
// } else if (testResult === "D") {
//     console.log("Your score is between 60% and 69%");
// } else if (testResult === "F") {
//     console.log("Your score is 60% or below");
// }

for (var i = 60; i <= 100; i += 1) {
    if (i >= 90) {
        console.log("For " + i + " ,you got an A.");
    } else if (i >= 80 && i <= 89) {
        console.log("For " + i + " ,you got a B.");
    } else if (i >= 70 && i <= 79) {
        console.log("For " + i + " ,you got a C.");
    } else if (i >= 60 && i <= 69) {
        console.log("For " + i + " ,you got a D.");
    } else {
        console.log("For " + i + " ,you got a F.");
    }
}