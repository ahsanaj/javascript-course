// The Geometrizer
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;

// Calculating the circumference by using the PI property of Math Library
var circumference = 2 * Math.PI * radius;

// Calculating the area by using the PI property of Math Library
var area = Math.PI * radius * radius;

console.log("The circumference is " + circumference);
console.log("The area is " + area);