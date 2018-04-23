var baseURL = "https://randomuser.me/api/"
var parameters = "?results=5000";
var url = baseURL + parameters;
var httpOptions = {
    method: "GET"
};

function turnJSONIntoObject(response) {
    return response.json();
}

function displayData(data) {
    //debugger;
    document.body.innerHTML = "";
    var html = "";
    data.results.forEach(function(person) {
        html = html + `<h1 style="text-transform:capitalize">${person.name.title} ${person.name.first} ${person.name.last}</h1>
        <img src="${person.picture.large}"/>`;
    });
    document.body.innerHTML = html;
}

function loading() {
    document.body.innerHTML = "Loading...";
}

loading();

fetch(url, httpOptions)
    .then(turnJSONIntoObject)
    .then(displayData);