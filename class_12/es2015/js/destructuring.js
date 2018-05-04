const PERSON = {
    firstName: "Bill",
    lastName: "Murray",
    email: "bill@ga.co"
};

/*const firstName = PERSON.firstName;
const lastName = PERSON.lastName;
const email = PERSON.email;*/

// easier way

//const { firstName, lastName, email } = PERSON;
//console.log(firstName, lastName, email);

// Another example

const explorer = {
    first: "Jacques",
    last: "Cousteau"
};

const { first, last } = explorer;
console.log(first, last);

// Another Example

const triangle = {
    sideOne: 3,
    sideTwo: 4,
    sideThree: 5
};
//renaming the variable
const { sideOne: length } = triangle;
console.log(length);

// Another example

function calculateArea({ width, height }) {
    // Without destructuring

    // //const width = rectangle.width;
    // const height = rectangle.height;
    // console.log(width * height + "m2");

    // With destructuring
    //const { width, height } = rectangle;
    console.log(width * height + "m2");
}
calculateArea({ width: 20, height: 40 });

const details = ["kookslams", "kookslams@gmail.com", 1000000];

/*var username = details[0];
var email = details[1];
var followers = details[2];*/

const [username, email, followers] = details;

console.log(username, email, followers);

// Arrow functions

const sayHi = () => {
    console.log("Hello there");
};

sayHi();

const greetPerson = name => {
    console.log(`Hello ${name}`);
};

greetPerson("Rock");

const add = (x, y) => x + y; // Implicit return

console.log(add(4, 5));

const nums = [1, 2, 3, 4, 5];

/*const evens = nums.filter(function(number) {
    return number % 2 === 0;
});*/

const evens = nums.filter(number => number % 2 === 0);

console.log(evens);

const multipliedByFive = nums.map(number => number * 5);

console.log(multipliedByFive);