// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// Converting Celsius to Fahrenheit
var celsiusTemperature = 34;

var fahrenheitOutput = (celsiusTemperature * 1.8) + 32;

console.log(celsiusTemperature + "C is " + fahrenheitOutput + "F");

// Converting Fahrenheit to Celcius
var fahrenheitTemperature = 79;

var celsiusOutput = (fahrenheitTemperature - 32) * (5 / 9);

console.log(fahrenheitTemperature + "F is " + celsiusOutput + "C");