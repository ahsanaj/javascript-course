var h1 = document.querySelector("h1");
var headingText = h1.innerText;

function updateHeading(text) {
    h1.innerText = text;
}

updateHeading("Updated with JS");

var allLis = document.querySelectorAll("li");

function updateItems() {
    for (var i = 0; i < allLis.length; i += 1) {
        allLis[i].innerText = Math.random();
    }
}

updateItems();

var pTag = document.querySelector("p");

var aTag = document.querySelector("a");

var href = aTag.getAttribute("href");

console.log(href);