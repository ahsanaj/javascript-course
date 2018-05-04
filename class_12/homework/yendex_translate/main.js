const API_KEY =
    "trnsl.1.1.20180423T104000Z.92de8d60387621be.caaca061cc50ab7a5e1ed325c018e437dc26eef6";

const httpOptions = {
    method: "GET"
};

const translateText = document.querySelector("#translate-input");
const translateResults = document.querySelector(".translate-results");
const recordButton = document.querySelector("#record-btn");

function displayData(data) {
    if (data.Error) {
        throw new Error(data.Error); // stops your javascript from running
    }
    const [translation] = data.text;
    if (translation) {
        let htmlMarkup = `<h3>Translating "${
      translateText.value
    }" to                Urdu</h3>
                        <p><strong>Translation: </strong>${translation}</p>
                          <hr>`;
        translateResults.innerHTML = htmlMarkup;
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(translation);
        //utterThis.lang = "ur";
        synth.speak(utterThis);
        form.reset();
        translateText.focus();
    }
}

function displayErrorMessage(error) {
    translateResults.innerHTML = `<p class='error-message'>${error}</p>`;
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    getTranslation(translateText.value)
        .then(displayData)
        .catch(displayErrorMessage);
});

function getTranslation(translateText) {
    const BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    const PARAMETERS = `?key=${API_KEY}&lang=ur&text=${translateText}`;
    const URL = BASE_URL + PARAMETERS;
    return fetch(URL, httpOptions).then(res => res.json());
}

recordButton.addEventListener("click", function() {
    const recog = new webkitSpeechRecognition();
    recog.onresult = function(data) {
        var recordText = data.results[0][0].transcript;
        translateText.value = recordText;
        getTranslation(translateText.value)
            .then(displayData)
            .catch(displayErrorMessage);
    };
    recog.start();
});