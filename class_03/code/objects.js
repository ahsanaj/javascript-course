// Creating Objects

var emptyObj = {};

var user = {
    firstName: "Ahsan",
    lastName: "Jawed",
    email: "aj@ga.co",
    age: 28,
    hobbies: [
        "cricket",
        "dota2"
    ]
}

// Accessing values

var firstName = user.firstName;
console.log(firstName);

var email = user.email;
console.log(email);

var movie = {
    title: "Test movie",
    director: "Bela Tarr",
    duration: 432
};

var key = "director";

console.log(movie);
console.log(movie[key]);

// Reassigning Values

movie.duration = 534;
console.log(movie);

// Adding Values

movie.runtime = 145;
console.log(movie);