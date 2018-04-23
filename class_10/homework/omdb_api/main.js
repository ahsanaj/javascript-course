var API_KEY = "b7135eff";

var httpOptions = {
    method: "GET"
}

function convertDataToJSON(response) {
    return response.json();
}

var searchInput = document.querySelector("#search-input");

function displayData(data) {
    if (data.Error) {
        throw new Error(data.Error); // stops your javascript from running
    }
    var movies = data.Search;
    if (movies) {
        var htmlMarkup = movies.reduce(function(html, movie) {
            return html + `<h3>You searched for "${searchInput.value}"</h3>
                        <h2>${movie.Title}</h2>
                        <img src=${movie.Poster}>
                        <p><strong>Type: </strong>${movie.Type}</p>
                        <p><strong>Year: </strong>${movie.Year}</p>
                        <hr>`
        }, "");
        document.querySelector(".search-results").innerHTML = htmlMarkup;
        form.reset();
        searchInput.focus();
    }
}

function displayErrorMessage(error) {
    document.querySelector(".search-results").innerHTML = `<p class='error-message'>${error}</p>`;
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    getMovie(searchInput.value)
        .then(convertDataToJSON)
        .then(displayData)
        .catch(displayErrorMessage);
    event.preventDefault();
});

function getMovie(searchText) {
    var baseURL = "http://www.omdbapi.com/";
    var parameters = `?apikey=${API_KEY}&s=${searchText}`;
    var url = baseURL + parameters;
    return fetch(url, httpOptions);
}