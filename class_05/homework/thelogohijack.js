// The Logo Hijack
// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Save the current src attribute into a variable
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

// Find the Google logo and store it in a variable.
var logoImg = document.querySelector("#hplogo img");

// Save the current src attribute into a variable
var currentSrc = logoImg.getAttribute("src");

// Modify the source of the logo IMG so that it's a Yahoo logo instead.
logoImg.setAttribute("src", "https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg");

// Find the Google search button and store it in a variable.
var searchBtn = document.querySelector("#tsf input");

// Modify the text of the button so that it says "Yahooo!" instead.
searchBtn.value = "Yahoo Search"
"Yahoo! Search"