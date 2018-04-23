console.log("Hello World");

var baseURL = "http://api.open-notify.org/astros.json";

// To make any AJAX Request
// URL
// HTTP Method (defaults to GET)
// Data Type (defaults to JSON)
// Parameters

function displayData(data) {
    var html = `<h1>${data.number} people in space </h1>`;
    document.body.innerHTML = html;
}

document.body.innerHTML = `<h1>Loading...</h1>`;

fetch(baseURL, { "method": "GET" })
    .then(function(response) { // readable stream
        console.log(response);
        return response.json();
    })
    .then(displayData)
    .catch(function(errorMessage) {
        console.warn(errorMessage);
    });