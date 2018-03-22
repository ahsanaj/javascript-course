// The classic Fizzbuzz Program
// For every number between 1 and 100...

// If the number is evenly divisible by 3, print "Fizz"

// If the number is evenly divisible by 5, print "Buzz"

// If the number is evenly divisible by 3 AND evenly divisible by 5, print "Fizzbuzz"

for (var count = 1; count <= 100; count += 1) {
    if (count % 15 === 0) {
        console.log("Fizzbuzz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    }
}