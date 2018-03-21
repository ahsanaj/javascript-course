// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (e.g. use the rules described here)

var noun = "ability";

// saving the noun length into nounLength variable
var nounLength = noun.length;

//saving the last character of the noun into lastNounChar variable
var lastNounChar = noun.charAt(nounLength - 1);

//saving the seconds last character of the noun into secondLastNounChar variable
var secondLastNounChar = noun.charAt(nounLength - 2);

//saving the last two characters of the noun into lastTwoNounChar variable
var lastTwoNounChar = secondLastNounChar + lastNounChar;

if ((secondLastNounChar === "a" || secondLastNounChar === "e" || secondLastNounChar === "i" || secondLastNounChar === "o" || secondLastNounChar === "u") && lastNounChar === "y") {
    noun = noun + "s";
} else if (lastTwoNounChar === "fe") {
    noun = noun.substring(0, nounLength - 2) + "ves";
} else if (lastTwoNounChar === "us") {
    noun = noun.substring(0, nounLength - 2) + "i";
} else if (lastNounChar === "f") {
    noun = noun.substring(0, nounLength - 1) + "ves";
} else if (lastNounChar === "y") {
    noun = noun.substring(0, nounLength - 1) + "ies";
} else if (lastNounChar === "s" || lastNounChar === "x" || lastNounChar === "z" || lastTwoNounChar === "ch" || lastTwoNounChar === "sh") {
    noun = noun + "es";
}

console.log(noun);