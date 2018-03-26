// Function Declaration - Hoisted

function doSomething() {
    console.log("This fucntion was called")
};

doSomething();

//Function expression

var logSomething = function() {
    {
        console.log("The log something function was aolled")
    }
}

/* The main difference between fn delcration and fn expression is hoisting. */

/* Declared function can be called anywhere bot or top of the script while expression can be called only after it is defined.*/

// Squares the number five
function squareFive() {
    console.log(Math.pow(5, 2));

}
// Roll Virtual Dice Function

function rollDice(sides) {
    console.log(Math.ceil(Math.random() * sides));
}

rollDice(12);

// Arguments

function seeArguments() {
    console.log(arguments);
}

seeArguments(10, 'A');

function greetPerson(name) {
    var message = "Hello " + name;
    console.log(message);
}

greetPerson("Jane");
greetPerson("Bob");
greetPerson();

function addTogether(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        console.log(x + y);
    } else {
        console.log("Invalid data, please enter numbers only");
    }

}

addTogether(3, 5);
addTogether(3, '5');

function squareNumber(numOne) {
    console.log(numOne * numOne);
}

squareNumber(5);

function mathPower(number, power) {
    var result = 1;
    for (var i = 0; i < power; i += 1) {
        result *= number;
    }
    console.log(result);
}

mathPower(5, 4);

function greet(start, name) {
    var message = start + ", " + name;
    console.log(message);
}
greet("Hello!", "Greg");
greet("Salam!", "AJ");

// changeTheme function
//     RECEIVE a themeChoice ("light" or "dark")
//     IF themeChoice === "light"
//         CHANGE the body background to "white"
//         CHANGE the text color to "black"
//     ELSE
//         CHANGE the body background to "black"
//         CHANGE the text color to "white"

// moveToLeft function
//     RECEIVE an element to animate
//     STORE the current left position as currentLeft
//     STORE the new left position, as desiredLeft, by adding 100px to currentLeft
//     UPDATE the left position of the provided element to be desiredLeft

function changeTheme(themeChoice) {
    if (themeChoice === "light") {
        console.log("Background white, text black");
    } else {
        console.log("Background black, text white");
    }
}

changeTheme("light");

function moveToLeft(element) {
    var currentLeft = 100;
    var newLeft = currentLeft + 100;
    console.log(newLeft);
}

moveToLeft("div");

//showOrHideMenu
//Receive a boolean called isOpen
// If the menu is open
//Log out "close the menu"
//Otherwise
//Log out "show the menu"

function showOrHideMenu(isOpen) {
    if (isOpen) {
        console.log("close the menu");
    } else {
        console.log("show the menu");
    }
}

showOrHideMenu(true);
showOrHideMenu(false);

function square(x) {
    var result = x * x;
    return result;
}

var squareNum = square(9);

console.log(squareNum);

var users = [
    { username: "kookslams", admin: true },
    { username: "sydneyga", admin: true },
    { username: "ga_sydney", admin: false }
];

function isAdmin(user) {
    return user.admin === true;
}

for (var i = 0; i < users.length; i += 1) {
    var currentUser = users[i];
    console.log(currentUser.username + " is admin = " + isAdmin(currentUser));
}

// Multiple functions - pass function as an argument

function cube(numOne) {
    return Math.pow(numOne, 3);
}

function double(numOne) {
    return numOne * 2;
}

console.log(cube(3));
console.log(double(16));

var result = cube(double(5));
console.log(result);

function delayed() {
    console.log("I was delayed");
}

setTimeout(delayed, 1000);

// 

var person = {
    firstName: "Jeff",
    sayHi: function() {
        console.log("Jeff says hi");
    }
}

person.sayHi();