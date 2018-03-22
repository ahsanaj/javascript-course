// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var topChoices = [
    "family", // 0
    "coding", // 1
    "dota 2", // 2
    "cricket", // 3
    "career" // 4
];

topChoices.push("liverpool fc");

topChoices.push("iphone repair");

for (var index = 0; index < topChoices.length; index += 1) {

    var suffix = null;

    var humanIndex = index + 1;

    var choice = topChoices[index];

    if (humanIndex % 10 === 1) {
        suffix = "st";
    } else if (humanIndex % 20 === 2) {
        suffix = "nd";
    } else if (humanIndex % 30 === 3) {
        suffix = "rd";
    } else
        suffix = "th";

    console.log("My " + humanIndex + suffix + " choice is " + choice);
}