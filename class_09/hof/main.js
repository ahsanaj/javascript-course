// Receiving functions as Input

function thisRunsRegularly() {
    console.log("This happens evey 1000ms");
}

// setInterval(thisRunsRegularly, 1000);

// setTimeout(function() {
//     console.log("I was delayed by 2000");
// }, 2000)

// Application programming interface -- API

//repeatLog
// Create a fucntion that receives a callback
// And runs it X amount of time

function repeat(numTimes, cb) {
    for (var i = 1; i <= numTimes; i += 1) {
        cb(i);
    }
}

function myCAllBack(i) {
    console.log("My callback was executed", i);
}

repeat(5, myCAllBack);

repeat(10, function(enemyCount) {
    console.log("A new enemy was created", enemyCount);
});

// create a forEach function that receives an array and a callback

function forEach(array, callBack) {
    for (var i = 0; i < array.length; i++) {
        callBack(array[i]);
    }
}

function printLetters(item) {
    console.log(item);
}
var letters = ["a", "b", "c", "d", "e"];

forEach(letters, printLetters);

forEach(["Groucho", "Harpo"], function(brothersName) {
    console.log(`The current brother is ${brothersName}`);
});

console.clear();

// creating a map function

function map(entireCollections, callbackFunction) {
    var mappedArray = [];
    for (var i = 0; i < entireCollections.length; i += 1) {
        var currentValue = entireCollections[i];
        var result = callbackFunction(currentValue);
        mappedArray.push(result);
    }
    return mappedArray;
}

var result = map([1, 2, 3, 4, 5], function(num) {
    return num * 5;
});

console.log(result);

console.clear();

// Return Functions as output

function creator() {
    console.log("Creator was called");
    return function() {
        console.log("I am the returned function");
    }
}

var created = creator();

created();

// Greet message

function createGreeting(greeting) {
    return function(name) {
        console.log(greeting, name);
    };
}

var hi = createGreeting("Hi");

hi("JavaScript Jack");

var hello = createGreeting("Hello");

hello("Elmo");

console.clear();

function createPokemonCharacter(name) {
    return function() {
        console.log(`A new ${name} was created`);
    }
}

var created = createPokemonCharacter("Pikachu");

created();

var createJigglypuff = createPokemonCharacter("Jigglypuff");

createJigglypuff();

console.clear();

//make Adder

// var addTen = makeAdder(10);

// var addTwo = makeAdder(2);

// function createElement(tagName)
// {

// }

// h1();
// p();
// input();