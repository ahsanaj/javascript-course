var baseURL = "https://api.icndb.com/"; // slash is very important at the end

var path = "jokes/random";

var parameters = "?limitTo=[nerdy]";

var url = baseURL + path + parameters;

var httpOptions = {
    method: "GET"
}

function convertPacketsIntoJSON(response) {
    //console.log(response);
    return response.json();
}

function displayData(data) {
    console.log(data);
    document.querySelector('.container').innerHTML += `<p>${data.value.joke}</p>`
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function getChuckQuote() {
    fetch(url, httpOptions)
        .then(convertPacketsIntoJSON)
        .then(displayData)
        .catch(function(error) {
            console.log(error)
        });
    setTimeout(function() {
        getChuckQuote();
        scrollToBottom();
    }, 8000);
}

getChuckQuote();