// Loops
// start; end; step
for (var i = 0; i < 5; i += 1) {
    console.log(i);
}

// Arrays
// Ordered, zero-based, accessed by index
var items = ["wallet", "glass", "jug"];
var firstItem = items[0];
console.log(firstItem);
var lastItem = items[items.length - 1];
console.log(lastItem);

// Objects
// Unordered, key-value pairs, access with a key
var explorer = {
    firstName: "Jacques",
    lastName: "Cousteau"
};

var firstName = explorer.firstName;
console.log(firstName);

var marxBrothers = [
    { email: "grouchaho@ga.com" },
    { email: "harpo@ga.com" },
    { email: "chico@ga.com" }
];

for (var i = 0; i < marxBrothers.length; i++) {
    var currentBrother = marxBrothers[i];
    console.log(currentBrother.email);
}