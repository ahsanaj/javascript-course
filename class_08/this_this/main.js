// Global Binding (Default)

console.log(this);

function sayHi() {
    console.log(this);
}

// always check where the function is called and why
sayHi();

// Event Binding - whatever was being interacted with

function onImageClick() {
    console.log(this.src);
}
var bill = document.querySelector("img");

bill.addEventListener("click", onImageClick);

console.clear();

// Implicit Binding - the method was called on

var person = {
    name: "Serge",
    sayHello: function() {
        console.log(`${this.name}`);
    }
};

person.sayHello(); // Call-site

// Explicit binding - this refers to whatever you passed in or provided

function sayHello2() {
    console.log(this);
}

var groucho = { name: "Groucho" };

sayHello2.call(groucho);

var gill = { name: "Gill" };

var steve = { name: "Gazza" };

var hazza = { name: "Hazza" }

var sayHelloGill = sayHello2.bind(gill);

sayHelloGill();

// new Binding - A new empty object that is implicitly returned - use Upper Camel Case for constructor

function Person(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.sayHi = function() {
        var message = `${this.name} says hi`;
        console.log(message);
    }
}

var p = new Person("Ahsan");

console.log(p.name);
p.sayHi();

function Pizza(type, toppings, drink) {
    this.type = type;
    this.toppings = toppings;
    this.eat = function() {
        var message = `Someone is having a ${this.type} with ${this.toppings[0]} topping`;
        console.log(message);
    };
}

var pizza = new Pizza("veggie", ["onions", "capsicum"]);

pizza.eat();