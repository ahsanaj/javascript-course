// What is wrong with var

// Re-assigning
// Shadowing - variable with same names creates problems
// Function scoped
// Hoisting

//var something = true;

//something = false;

// let

// can be reassigned

let score = 1000;

score = 1300;

console.log(score);

// prevents shadowing

let url = "http://fillmurray.com";

function getNickCagePic() {
    let url = "http://placecage.com";
    console.log(url);
}

getNickCagePic();
console.log(url);

// Temporal Dead Zone - No hoisting

//console.log(something);
//let something = true;

// Block scoping - curly brackets create a scope

//console.log(a);

if (true) {
    let a = 9;
}

// const

// Block scoped
// Temporal Dead Zone - no hoisting
// Prevents shadowing
// Prevents reassigning and redeclaring
// Google advises it to be UPPER_SNAKE_CASE

const FAV_NUM = 42;
FAV_NUM = 32;