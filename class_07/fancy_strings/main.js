var basicStr = `Hello World`;

var noEscape = `Jane's bag`;

var favNumber = 5;

var myFav = `My favourite number is ${favNumber}`;

console.log(myFav);

var myMathsMessage = `4 * 2 = ${4 * 2}`;

var username = "kookslams";

var postCount = 673;

var description = "Curated kook slammage";

var html = `
    <h1>${username}</h1>
    <p>${description}</p>
    <p> Post Count: ${postCount}</p>
`;

document.body.innerHTML += (html);