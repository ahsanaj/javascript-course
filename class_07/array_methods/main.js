var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

letters.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});

var numbers = [1234, 1512, 42, 19];

var displayNum = (currentNum, i) => {
    var html = `<p>Item at index ${i} is ${currentNum}</p>`;
    document.body.innerHTML += html;
};

numbers.forEach(displayNum);

// Filter

var nums = [1, 2, 3, 4, 5, 6, 6];

var odds = nums.filter((num) => num % 2 === 1);

console.log(odds);

console.clear();

var marxBrothers = [
    { name: "Groucho", admin: true },
    { name: "Harpo", admin: false },
    { name: "Gummo", admin: false }
];

var filteredArray = marxBrothers.filter((brother) => brother.admin);

console.log(filteredArray);

var words = ["banana", "MANGO", "Grapes", "Custard", "Apple", "CHICKEN"];

var filterUpperCase = words.filter((word) => word.toUpperCase() === word)

console.log(filterUpperCase);

console.clear();

// Map - transforming every element in a collection into something else

var letters = ["a", "b", "c", "d", "e"];

var upperCasedLetters = letters.map((letter) => letter.toUpperCase());

console.log(upperCasedLetters);

var nums = [1, 2, 3, 4, 5];

var numsByFive = nums.map((num) => num * 5);

console.log(numsByFive);

var letters = ["a", "b", "c", "d", "e"];

var upperCasedLetters = letters.map((letter) => document.body.innerHTML += `<p>${letter}</p>`);

var todos = [
    "Watch Satantango",
    "Go to a plant sale",
    "Stay silent",
    "Buy chicken"
];

var htmlTodos = todos.map((item) => `<li>${item}</li>`);

htmlTodos.forEach((text) => document.body.innerHTML += text);

console.clear();

// Reduce or inject method - Take a collection of data and reduce it to just one value
// The other name is inject - injecting an operation between items in the collection

var numbers = [1, 2, 3, 4, 5];

var total = numbers.reduce((sum, currentNum) => {
    var message = `Running Total: ${sum}.
                    Current Number: ${currentNum}.`;
    console.log(message);
    return sum + currentNum;
}, 0);

console.log(total);

var testScores = [76, 92, 48, 95, 100];

var totalScore = testScores.reduce((sum, currentScore) => {
    return (sum + currentScore);
}, 0)

var average = totalScore / testScores.length;

console.log(average);

console.time("Reduce");

var todos = [
    "Watch Satantango",
    "Go to a plant sale",
    "Stay silent",
    "Buy mango chicken"
];

var allHTML = todos.reduce((totalHTML, todo) => totalHTML + `<li>${todo}</li>`, "");

console.log(allHTML);

document.body.innerHTML += allHTML;

console.timeEnd("Reduce");