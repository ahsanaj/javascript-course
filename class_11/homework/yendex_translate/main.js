var API_KEY =
    "trnsl.1.1.20180423T104000Z.92de8d60387621be.caaca061cc50ab7a5e1ed325c018e437dc26eef6";

var httpOptions = {
    method: "GET"
};

function convertDataToJSON(response) {
    return response.json();
}

var translateText = document.querySelector("#translate-input");
var translateResults = document.querySelector(".translate-results");

function displayData(data) {
    //debugger;
    if (data.Error) {
        throw new Error(data.Error); // stops your javascript from running
    }
    var translations = data.text;
    if (translations) {
        var htmlMarkup = translations.reduce(function(html, translation) {
            return (
                html +
                `<h3>Translating "${translateText.value}" to Urdu</h3>
                          <p><strong>Translation: </strong>${translation}</p>
                          <hr>`
            );
        }, "");
        translateResults.innerHTML = htmlMarkup;
        form.reset();
        translateText.focus();
    }
}

function displayErrorMessage(error) {
    translateResults.innerHTML = `<p class='error-message'>${error}</p>`;
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    getTranslation(translateText.value)
        .then(convertDataToJSON)
        .then(displayData)
        .catch(displayErrorMessage);
    event.preventDefault();
});

function getTranslation(translateText) {
    var baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    var parameters = `?key=${API_KEY}&lang=ur&text=${translateText}`;
    var url = baseURL + parameters;
    return fetch(url, httpOptions);
}