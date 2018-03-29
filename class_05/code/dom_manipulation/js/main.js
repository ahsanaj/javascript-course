// document.querySelector( "CSS SELECTOR");
// Traverse the DOM and returns the first DOM node that passes a given a CSS Selector

var h1 = document.querySelector("h1");

var p = document.querySelector("p");

var li = document.querySelector("li");

console.log(h1, p, li);

var video = document.querySelector("video");

console.log(video);

var firstImage = document.querySelector("img");

console.log(firstImage);

// document.querySelectorAll( "CSS SELECTOR");
// Traverse the DOM and returns all DOM node that passes a given a CSS Selector

var images = document.querySelectorAll("img");

console.log(images);

var blockquote = document.querySelectorAll("blockquote");

console.log(blockquote);

// DOM Traversal

var list = document.querySelector("ul");

var children = list.children;

var parent = list.parentNode;

var siblings = list.parentNode.children;

// node.getAttribute ("Attribute Name")
// Return the current attribute value

var firstImage = document.querySelector("img");

var src = firstImage.getAttribute("src");
var alt = firstImage.getAttribute("alt");

console.log(src, alt);

// Find the a tag
// Log out the href attribute

var linkNode = document.querySelector("a");

var href = linkNode.getAttribute("href");

console.log(href);

// node.setAttribute("ATTRIBUTE NAME","DESIRED ATTRIBUTE VALUE");

// Select the first image
// Change the src attribute to http://placepuppy.net/300/300
// Change the alt attribute to "A picture of a puppy"
// Add the title attribute and set it to "A puppy"

var firstImage = document.querySelector("img");
firstImage.setAttribute("src", "http://placepuppy.net/300/300");
firstImage.setAttribute("alt", "A picture of a puppy");
firstImage.setAttribute("title", "A puppy");

var anchor = document.querySelector("a");

anchor.setAttribute("href", "http://yahoo.com");
anchor.innerText = "Yahoo";

// Accessing the current HTML
// node.innerText Or node.innerHTML

var h1 = document.querySelector("h1");

h1.innerText = "World HELLO!";

console.log(h1.innerText);

var ul = document.querySelector("ul");

console.log(ul.innerHTML);

// Change the current HTML
// Re-assign node.innerText or node.innerHTML

var pTag = document.querySelector("p");
pTag.innerText = "Update with JS";

var body = document.body;

body.innerHTML += "<h1>Heading added with JS</h1>";

// Getting User Input

var input = document.querySelector("input");

var currentValue = input.value;

// Anything that has a hyphen in CSS becomes camelCase in JavaScript. font-size becomes fontSize

// Accessing current styles
// getComputerStyle ( DOM Node );

var h1 = document.querySelector("h1");

var headingStylez = getComputedStyle(h1);

var width = headingStylez.width;
var fontSize = headingStylez.fontSize;

console.log(width, fontSize);

// Get the a tag's text-decoration, border and color

var anchor = document.querySelector("a");

var anchorStylez = getComputedStyle(anchor);

var textDecoration = anchorStylez.textDecoration;

var border = anchorStylez.border;

var color = anchorStylez.color;

console.log(textDecoration, border, color);

// Set CSS styles with JS
// Node.style.CSS

var h1 = document.querySelector("h1");

// By default all styles are empty unless getComputedStyle( DOM Node ) is run
// h1.style.fontSize would output "" empty

h1.style.fontSize = "90px";

// Go find the a tag
// Set the color to be red
// Add an underline
// Set the font-family to be "monospace"

var anchor = document.querySelector("a");

anchor.style.color = "rgb(255,0,0)";

anchor.style.textDecoration = "underline";

anchor.style.fontFamily = "monospace";

// Creating DOM nodes

var newParagraph = document.createElement("p");

newParagraph.innerText = "Created with JS";

newParagraph.style.textTransform = "uppercase";

newParagraph.style.color = "chartreuse";

document.body.appendChild(newParagraph);

// Events with JavaScript
// The event type (e.g. click, hover, scroll)
// The event target (a DOM Node)
// The callback function (a function)

var eventType = "click";

var button = document.querySelector("button");

function buttonClicked() {
    document.body.style.backgroundColor = "#16161d";
}

button.addEventListener(eventType, buttonClicked);