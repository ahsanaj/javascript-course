var ordinals = ["zeroth", "first", "seconds", "third"];

ordinals.push("fourth");

ordinals.shift();

// Print every ordinal in the array called ordinals

// Define my loop:

// Starting Point - 0

// Step - +1

// Ending Point - Use the length of the array

for (var index = 0; index < ordinals.length; index += 1) {
    var currentOrdinal = ordinals[index];
    console.log(currentOrdinal);
}