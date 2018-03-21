// if the user's age is over 18
//     Log out Go purchase something
// Otherwise
//     Go to mylittlepony.com

var userAge = 16;
var isHacker = true;

if (userAge > 18 || isHacker) {
    console.log("You can view the site");
} else {
    console.log("Go to mylittlepony.com");
}

// If the user's name is Blade AND his job is a Teacher
// Console Log That is a good choice!
//ELSE IF the user's name is Blade AND his job is Landscape Gardener
// Console Log that in't a great choice for you
//ELSE
//Console Log we aren't sure

var userName = "Blade";

var jobTitle = "Teacher";

if (userName === "Blade" && jobTitle === "Teacher") {
    console.log("That is a good choice!");
} else if (userName === "Blade" && jobTitle === "Landscape Gardener") {
    console.log("That isn't a great choice for you");
} else {
    console.log("We aren't sure");
}