// A Transit Application
// Start with this data...

// var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// Create a function called travelFrom that receives a start station and an end station.

// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus
// Make this work if you want to go backwards! e.g. You want to travel from "Redfern" to "St. James"
// Make it error-tolerant. E.g.:
// Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// If someone passes in a station that doesn't exist, tell them
// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line! (e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. t2 and t3 both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. var sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way...
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages

var stations = [
    "Museum",
    "St. James",
    "Circular Quay",
    "Wynyard",
    "Townhall",
    "Central",
    "Redfern",
    "Macdonaldtown",
    "Newtown"
];

function convertArrayToLowercase(origArray) {
    var arrayLowercase = [];
    for (var i = 0; i < origArray.length; i += 1) {
        arrayLowercase.push(origArray[i].toLowerCase());
    }
    return arrayLowercase;
}

var stationsLowercase = convertArrayToLowercase(stations);

function checkPluralize(word, count) {
    var result = "";
    count > 1 ? result = word + "s" : result = word;
    return result;
}

function getStationIndex(startStation, endStation) {

    var indexObj = {};

    indexObj.startIndex = stationsLowercase.indexOf(startStation.trim().toLowerCase());
    indexObj.endIndex = stationsLowercase.indexOf(endStation.trim().toLowerCase());

    return indexObj;
}

function checkStationExists(startStation, endStation) {

    var indexObj = getStationIndex(startStation, endStation);

    return indexObj.startIndex !== -1 && indexObj.endIndex !== -1;

}

function checkGrammer(names, splitBy) {

    var result = "";
    var namesArray = names.split(splitBy);

    namesArray.length > 2 ?
        result = namesArray.slice(1, namesArray.length - 1).join(", ") + " and " + namesArray.slice(-1) :
        result = namesArray.slice(1).join();

    return result;
}

function travelFrom(startStation, endStation) {

    var stationObj = getStationIndex(startStation, endStation);

    if (checkStationExists(startStation, endStation)) {

        var tempIndex;

        var noOfStations = Math.abs(stationObj.endIndex - stationObj.startIndex) - 1;

        if (noOfStations !== -1) {
            var message = "To go from '" + startStation + "' to '" + endStation + "' - you'll need to go through " + noOfStations + " " + checkPluralize("stop", noOfStations);

            var stationNames = "";

            if (stationObj.startIndex < stationObj.endIndex) {
                for (var i = stationObj.startIndex + 1; i < stationObj.endIndex; i += 1) {
                    stationNames += "-" + stations[i];
                }
            } else {
                for (var j = stationObj.startIndex - 1; j > stationObj.endIndex; j -= 1) {
                    stationNames += "-" + stations[j];
                }
            }

            stationNames = checkGrammer(stationNames, "-");

            console.log(message);
            console.log(stationNames);
        } else {
            console.log("You are already on " + startStation + " station.");
        }
    } else {

        if (stationObj.startIndex === -1 && stationObj.endIndex === -1) {
            console.log("Stations " + startStation + " and " + endStation + " do no exist.");
        } else if (stationObj.startIndex === -1) {
            console.log("Station " + startStation + " does not exist.");
        } else {
            console.log("Station " + endStation + " does not exist.");
        }

    }
}

travelFrom('redfern ', 'newtown');