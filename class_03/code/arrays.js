// Arrays
// - Ordered
// - We access data with an index (a number)
// - The index is zero-based

var emptyArray = [];

var randomNumbers = [12, 42, 0.8, 16, 100, 48];

console.log(emptyArray.length);

console.log(randomNumbers.length);

var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

var weirdArray = [null, undefined, true, "", 10, []];

// Accessing Elements
// - Always use an index that starts at 0

var badgermin = weirdInstruments[0];

var stylophone = weirdInstruments[2];

var lastItem = weirdInstruments[weirdInstruments.length - 1];

// Reassigning Elements

weirdInstruments[0] = "Roli Seaboard";

weirdInstruments[3] = "Makey Makey Banana Piano";

// Properties & Methods

// Adding Elements
var alpha = ["b", "c"];

// Adding to the end
alpha.push("d");

// Adding to the start
alpha.unshift("a");

// Removing from the last
alpha.pop();

// Removing from the start
alpha.shift();

// Finding Elements

var emails = ["groucho", "harpo", "zeppo", "gummo"];

var doesHarpoExist = emails.includes("harpo");

var zeppoIndex = emails.indexOf("zeppo");

console.log(doesHarpoExist, zeppoIndex);