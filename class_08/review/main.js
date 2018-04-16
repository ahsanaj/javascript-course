console.log("Hello World");

var todos = [
    "Todo 1",
    "Todo 2",
    "Eat mango chicken"
];

var listItems = todos.reduce(function(currentHTML, todo) {
    return currentHTML + todo;
}, "");

console.log(listItems);