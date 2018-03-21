// Store language
//If language is HTML or CSS
// You are talking about a front end language
//Otherwise
// It could be a back end language

var languageName = "Node.js";

if (languageName === "HTML" || languageName === "CSS") {
    console.log("You are talking about a front end language");
} else {
    console.log("It could be a back end language");
}

var userNameExists = true;
var appropriatePassword = false;

if (userNameExists === true && appropriatePassword === true) {
    console.log("You are logged in");
} else {
    console.log("The username or password is incorrect.");
}

// Store hasUserAccount
// If the user doesn't have a user account
//You can create an account
// Otherwise
//You already have an account

var hasUserAccount = false;
if (!hasUserAccount) {
    console.log("You can create an account");
} else {
    console.log("You already have an account");
}