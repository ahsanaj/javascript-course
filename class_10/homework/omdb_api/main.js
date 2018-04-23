var baseURL = "http://www.omdbapi.com/";
var parameters = "?apikey=b7135eff&i=tt3896198";
var url = baseURL + parameters;
var httpOptions = {
    method: "GET"
}

function convertDataToJSON(response) {
    return response.json();
}

function displayData(data) {
    console.log(data);
}

function displayErrorMessage(error) {
    console.warn(error);
}

fetch(url, httpOptions)
    .then(convertDataToJSON)
    .then(displayData)
    .catch(displayErrorMessage);