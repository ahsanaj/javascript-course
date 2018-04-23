var baseURL = "http://ron-swanson-quotes.herokuapp.com/"; // slash is very important at the end

var path = "v2/quotes";

var parameters = "";

var url = baseURL + path + parameters;

var httpOptions = {
    method: "GET"
}

function convertPacketsIntoJSON(response) {
    console.log(response);
    return response.json();
}

function displayData(data) {
    document.body.innerHTML += `<p>${data[0]}</p>`
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function getRonQuote() {
    fetch(url, httpOptions)
        .then(convertPacketsIntoJSON)
        .then(displayData)
        .catch(function(error) {
            console.log(error)
        });
    setTimeout(getRonQuote, 1000);
    setTimeout(scrollToBottom, 1100);
}

getRonQuote();