// Working with Arrays

// Starting with an empty array called rainbowColors:
var rainbowColors = [];

// Add "orange" to the end of the array
rainbowColors.push("orange");

// Add "red" to the start of the array
rainbowColors.unshift("red");

// Add "yellow" to the end
rainbowColors.push("yellow");

// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors);

// Log out the length of the array
var arrayLength = rainbowColors.length
console.log(arrayLength);

// Log out the second item
console.log(rainbowColors[1]);

// Log out the last item (make this flexible/dynamic!)
console.log(rainbowColors[arrayLength - 1]);

// Log out the index of the string "blue"
console.log(rainbowColors.indexOf("blue"));

// Bonus: Find out the difference between .slice and .splice

// The key difference between slice and splice is that one is *destructive* and one is *non-destructive*. *Destructive* methods change the data permanently, whereas *non-destructive* don't

// .slice needs to accept two arguments, start and end. It will return a new array containing the elements from the given start index up the one right before the specified end index. It DOES NOT change the original array but rather creates a copy of it.
// Example: var colors = ["red","blue","orange","green","white"];
// var newColor = colors.slice(0,3) =>  The result will be ["red","blue","orange"];

// .splice method changes the contents of an array by removing existing elements and/or adding new elements.
// It takes three arguments - start, deleteCount and the items to insert.
// Example: var colors = ["red","blue","orange","green","white"];
// var newColor = colors.splice(2,1,"purple") =>  The result will be ["red","blue","purple","green","white"];
// In this example the start index is 2, deleteCount is 1 (means delete 1 item from that index, if it is set to 0, means don't delete anything), after delete insert "purple" where the item was deleted.

// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)

var twoColors = rainbowColors.slice(1, 3);

console.log(twoColors);

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

console.log(nums);

nums.splice(2, 2);

nums.splice(3, 1);

console.log(nums);

// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

var arrOfArrs = [
    ["inner array first item", "inner array second item"],
    ["first", "second", "third"]
];

// Access "inner array first item" and print it out"

console.log(arrOfArrs[0][0]);

// Print "third" by using a dynamic index

var lastOuterItem = arrOfArrs[arrOfArrs.length - 1];
var lastInnerItem = lastOuterItem[lastOuterItem.length - 1];
console.log(lastInnerItem);

// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

for (var i = 0; i <= lastOuterItem.length - 1; i += 1) {
    console.log(lastOuterItem[i]);
}