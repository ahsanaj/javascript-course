const translate = require("./API.js").default;
const math = require("./Math.js");

const { add } = require("./Math.js");

//console.log(translate("We made a request"));

//console.log(math.add(4, 5), math.subtract(5, 2), math.PI);

const { speechRecognition, speechSynthesis } = require("./Speech.js");

console.log(speechRecognition);
console.log(speechSynthesis);