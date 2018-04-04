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

var trainLines = [{
    lineName: "T1",
    direction: "Western",
    stations: [
        "Strathfield",
        "Parramatta",
        "Westmead",
        "Wentworthville",
        "Pendle Hill",
        "Toongabbie",
        "Seven Hills",
        "Blacktown",
        "Marayong",
        "Quakers Hill",
        "Schofields",
        "Riverstone",
        "Vineyard",
        "Mulgrave",
        "Windsor",
        "Clarendon",
        "East Richmond",
        "Richmond",
        "Doonside",
        "Rooty Hill",
        "Mount Druitt",
        "St Marys",
        "Werrington",
        "Kingswood",
        "Penrith",
        "Emu Plains"
    ]
}, {
    lineName: "T6",
    direction: "Carlingford",
    stations: [
        "Carlingford",
        "Telopea",
        "Dundas",
        "Rydalmere",
        "Camellia",
        "Rosehill",
        "Clyde",
        "Auburn",
        "Lidcombe",
        "Strathfield",
        "Burwood",
        "Redfern",
        "Central",
        "Town Hall",
        "Wynyard",
        "Milsons Point",
        "North Sydney"
    ]
}, {
    lineName: "T4",
    direction: "Eastern & Illawara",
    stations: [
        "Hurstville",
        "Allawah",
        "Carlton",
        "Kogarah",
        "Rockdale",
        "Banksia",
        "Arncliffe",
        "Wolli Creek",
        "Tempe",
        "Sydenham",
        "Redfern",
        "Central",
        "Town Hall",
        "Martin Place",
        "Kings Cross",
        "Edgecliff",
        "Bondi Junction"
    ]
}];

/*********** Utility Functions *************/

// declaring the function checkPluralize to check for plurals. It takes in word and count as its parameters. For eg. checkPluralize("station","2") will return the string "stations" whereas checkPluralize("station","1") will return the string "station"
function checkPluralize(word, count) {
    var result = "";
    if (count > 1) {
        result = word + "s";
    } else {
        result = word;
    }
    return result;
}

// declaring the function checkGrammer to add the "and" word before the last word. It takes in names and splitBy as its parameters. For eg. checkGrammer("central-wynyard-museum","-") will return the string "central, wynyard and museum"
function checkGrammer(names, splitBy) {
    var result = "";
    var namesArray = names.split(splitBy);

    if (namesArray.length > 2) {
        result = namesArray.slice(1, namesArray.length - 1).join(", ") + " and " + namesArray.slice(-1);
    } else {
        result = namesArray.slice(1).join();
    }

    return result;
}

/*********** Main Functions *************/

function lineLookUp(lineName) {
    var index = -1;
    for (var i = 0; i < trainLines.length; i += 1) {
        var currentLine = trainLines[i];
        if (currentLine.lineName.toLowerCase() === lineName.toLowerCase()) {
            index = i;
        }
    }
    return index;
}
// declaring the getLineIndex function to get line name Index from trainlines array of objects. The function takes startObj and endObj as its parameters and return the lineIndexObj object with start and end line index numbers
function getLineIndex(startObj, endObj) {

    // declaring the startLineIndex and endLineIndex variables to save the index numbers of the lines provided by the user. By default they are set to -1 which means no indexes found.
    var startLineIndex = -1,
        endLineIndex = -1;

    // looping through the trainLines array to find the line indexes. The search is not case-sensitive as it is comparing lowerCase values. If the start station is found, save it's index into the startLineIndex variable, similarly if the end station is found, save it's index into the endLineIndex

    //  Try to use filter instead - MDN Array
    startLineIndex = lineLookUp(startObj.lineName);
    endLineIndex = lineLookUp(endObj.lineName);

    // save startLineIndex and endLineIndex variables into the lineIndexObj object
    var lineIndexObj = {
        startLineIndex: startLineIndex,
        endLineIndex: endLineIndex
    }

    return lineIndexObj;
}

// declaring the getStationIndex function to get station name Index from trainlines array of objects. The function takes startObj and endObj as its parameters and return the stationIndexObj object with start and end station index numbers
function getStationIndex(startObj, endObj) {

    // declaring the startStationindex and endStationIndex variables to save the index numbers of the station provided by the user. By default they are set to -1 which means no indexes found.
    var startStationIndex = -1,
        endStationIndex = -1;

    // saving line name Index from trainlines array of objects into lineIndexObj - for e.g the index for line "T4" will be 2
    var lineIndexObj = getLineIndex(startObj, endObj);

    // saving the stations list from trainLines by using the start line index
    var startLineStationsList = trainLines[lineIndexObj.startLineIndex].stations;

    // saving the stations list from trainLines by using the end line index
    var endLineStationsList = trainLines[lineIndexObj.endLineIndex].stations;

    // looping through the start station array to check if the start station exist in the array, if it exists save its index into the startStationIndex variable
    for (var i = 0; i < startLineStationsList.length; i += 1) {
        if (startLineStationsList[i].toLowerCase() === startObj.station.toLowerCase()) {
            startStationIndex = i;
            break;
        }
    }

    // looping through the end station array to check if the end station exist in the array, if it exists save its index into the endStationIndex variable
    for (var i = 0; i < endLineStationsList.length; i += 1) {
        if (endLineStationsList[i].toLowerCase() === endObj.station.toLowerCase()) {
            endStationIndex = i;
            break;
        }
    }

    // save startStationIndex and endStationIndex into the variable
    var stationIndexObj = {
        startStationIndex: startStationIndex,
        endStationIndex: endStationIndex
    }

    // return the stationIndexObj with the station index numbers
    return stationIndexObj;
}

function checkOnSameLine(startLineName, endLineName) {
    return startLineName.toLowerCase() === endLineName.toLowerCase();
}
// declaring the getCommonStation function to find the common stations between two lines provided by the users. The function takes lineIndexObj and stationIndexObj as its parameters and return the commonStationArray array with the common station details
function getCommonStation(lineIndexObj, stationIndexObj) {

    // saving the stations list from trainLines by using the start line index
    var startLineStations = trainLines[lineIndexObj.startLineIndex].stations;

    // saving the stations list from trainLines by using the end line index
    var endLineStations = trainLines[lineIndexObj.endLineIndex].stations;

    // declaring an Array to save the common station details
    var commonStationArray = [];

    // looping through the startLineStations array nested with endLineStations to find the common station. The search is not case-senstitive by using the toLowerCase method. If the stations match, it pushes an object to the commonStationArray. The array will save the commonStationName, commonStationStartIndex, commonStationEndIndex and the difference between start station and the common station, this will later be used to calculate the closest common station to start station.
    for (var i = 0; i < startLineStations.length; i += 1) {

        for (var j = 0; j < endLineStations.length; j += 1) {

            if (startLineStations[i].toLowerCase() === endLineStations[j].toLowerCase()) {

                commonStationArray.push({
                    commonStationName: startLineStations[i],
                    commonStationStartIndex: i,
                    commonStationEndIndex: j,
                    startToCommonStationDifference: Math.abs(i - stationIndexObj.startStationIndex)
                })

            }
        }
    }

    return commonStationArray;
}

// declaring the getClosestCommonStation function to find the closest common stations between two lines provided by the users. The function takes commonStationArray as its parameter which is returned from the  getCommonStation function. It returns the closestCommonStation array with the details.
function getClosestCommonStation(commonStationArray) {

    var closestStationIndex = 0;

    // it will use the startToCommonStationDifference key in the commonStationArray array of objects to find the index of the closest station to the start station.
    if (commonStationArray.length > 1) {
        for (i = 0; i < commonStationArray.length; i += 1) {
            if (i < commonStationArray.length - 1) {
                if (commonStationArray[i].startToCommonStationDifference < commonStationArray[i + 1].startToCommonStationDifference) {
                    closestStationIndex = i;
                } else {
                    closestStationIndex = i + 1;
                }
            }
        }
    }
    // saving the closes common station details by using the closestStationIndex calculated above
    var closestCommonStation = commonStationArray[closestStationIndex];

    return closestCommonStation;
}

// declaring the getStationNamesOnDifferentLines function to log out the route details between two lines and where to change the train from. The function takes lineIndexObj, stationIndexObj and commonStationObj as its parameters.
function getStationNamesOnDifferentLines(lineIndexObj, stationIndexObj, commonStationObj) {

    var startLineName = trainLines[lineIndexObj.startLineIndex].lineName;

    var startDirection = trainLines[lineIndexObj.startLineIndex].direction;

    var startStationNames = [];

    var commonStationName = commonStationObj.commonStationName;

    var endLineName = trainLines[lineIndexObj.endLineIndex].lineName;

    var endDirection = trainLines[lineIndexObj.endLineIndex].direction;

    var endStationNames = [];
    // log out the line name and its direction, for.eg (T1 Western Line)
    // console.log(trainLines[lineIndexObj.startLineIndex].lineName + " " + trainLines[lineIndexObj.startLineIndex].direction + " Line");

    // check if the start station index is less than the common station index on the same line, if not the loop has to be reversed as seen later
    if (stationIndexObj.startStationIndex < commonStationObj.commonStationStartIndex) {

        var stationNames = "";

        for (var i = stationIndexObj.startStationIndex; i <= commonStationObj.commonStationStartIndex; i += 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.startLineIndex].stations[i];
            startStationNames.push(trainLines[lineIndexObj.startLineIndex].stations[i]);
        }

        // passing the stationNames into the checkGrammer function to log out the "and" word before the last station name
        stationNames = checkGrammer(stationNames, "-");

        // logging out info text
        console.log("/************** Starting Point *************/");

        // logging out the station names of the first line
        console.log(stationNames);

        // logging out info text
        console.log("/************** Change of Trains *************/");

        // logging out the where to change the line from and take a different train
        console.log("Change at " + commonStationObj.commonStationName + " and take " + trainLines[lineIndexObj.endLineIndex].lineName + " " +
            trainLines[lineIndexObj.endLineIndex].direction + " Line");
    } else {

        var stationNames = "";

        // the loop is reversed as common station index is greater than the start station index on the same line
        for (var i = stationIndexObj.startStationIndex; i >= commonStationObj.commonStationStartIndex; i -= 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.startLineIndex].stations[i];
            startStationNames.push(trainLines[lineIndexObj.startLineIndex].stations[i]);
        }

        // passing the stationNames into the checkGrammer function to log out the "and" word before the last station name
        stationNames = checkGrammer(stationNames, "-");

        // logging out info text
        console.log("/************** Starting Point *************/");

        // logging out the station names of the first line
        console.log(stationNames);

        // logging out info text
        console.log("/************** Change of Trains *************/");

        // logging out the where to change the line from and take a different train
        console.log("Change at " + commonStationObj.commonStationName + " and take " + trainLines[lineIndexObj.endLineIndex].lineName + " " +
            trainLines[lineIndexObj.endLineIndex].direction + " Line");
    }
    // check if the end station index is less than the common station index on the same line, if not the loop has to be reversed as seen later
    if (commonStationObj.commonStationEndIndex < stationIndexObj.endStationIndex) {

        var stationNames = "";

        for (var i = commonStationObj.commonStationEndIndex; i <= stationIndexObj.endStationIndex; i += 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.endLineIndex].stations[i];
            endStationNames.push(trainLines[lineIndexObj.endLineIndex].stations[i]);
        }

        // passing the stationNames into the checkGrammer function to log out the "and" word before the last station name
        stationNames = checkGrammer(stationNames, "-");

        // logging out info text
        console.log("/************** Destination *************/");

        // logging out the station names of the first line
        console.log(stationNames);

    } else {
        // the loop is reversed as common station index is greater than the end station index on the same line
        for (var i = commonStationObj.commonStationEndIndex; i >= stationIndexObj.endStationIndex; i -= 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.endLineIndex].stations[i];
            endStationNames.push(trainLines[lineIndexObj.endLineIndex].stations[i]);
        }

        // passing the stationNames into the checkGrammer function to log out the "and" word before the last station name
        stationNames = checkGrammer(stationNames, "-");

        // logging out info text
        console.log("/************** Destination *************/");

        // logging out the station names of the first line
        console.log(stationNames);
    }
    var routeObj = {
        startLineName: startLineName,

        startDirection: startDirection,

        startStationNames: startStationNames,

        commonStationName: commonStationName,

        endLineName: endLineName,

        endDirection: endDirection,

        endStationNames: endStationNames
    };
    return routeObj;
}

// declaring the getStationNamesOnSameLine function to log out the route details on the same line. The function takes lineIndexObj and stationIndexObj as its parameters.
function getStationNamesOnSameLine(lineIndexObj, stationIndexObj) {

    var startLineName = trainLines[lineIndexObj.startLineIndex].lineName;

    var startDirection = trainLines[lineIndexObj.startLineIndex].direction;

    var startStationNames = [];

    // log out the line name and its direction, for.eg (T1 Western Line)
    console.log(trainLines[lineIndexObj.startLineIndex].lineName + " " + trainLines[lineIndexObj.startLineIndex].direction + " Line");

    // check if the start station index is less than the end station index on the same line, if not the loop has to be reversed as seen later
    if (stationIndexObj.startStationIndex < stationIndexObj.endStationIndex) {

        var stationNames = "";

        for (var i = stationIndexObj.startStationIndex; i <= stationIndexObj.endStationIndex; i += 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.startLineIndex].stations[i];
            startStationNames.push(trainLines[lineIndexObj.startLineIndex].stations[i]);
        }

        // logging out info text
        console.log("/************** Route Details *************/");

        // passing the stationNames into the checkGrammer function to log out the "and" word before the last station name
        //stationNames = checkGrammer(stationNames, "-");

        // logging out the station names of the first line
        console.log(stationNames);


    } else {

        var stationNames = "";

        // the loop is reversed as end station index is greater than the start station index on the same line
        for (var i = stationIndexObj.startStationIndex; i >= stationIndexObj.endStationIndex; i -= 1) {
            // saving the stationNames into the stationNames variable
            stationNames += "-" + trainLines[lineIndexObj.startLineIndex].stations[i];
            startStationNames.push(trainLines[lineIndexObj.startLineIndex].stations[i]);
        }
    }
    var routeObj = {
        startLineName: startLineName,

        startDirection: startDirection,

        startStationNames: startStationNames,
    };
    return routeObj;
}

function travelFrom(startLineName, startStation, endLineName, endStation) {

    // Advice for phuong - only use comments when the function name is vague
    // logging out info text
    var routeObj = {};
    console.log("/*********  Journey from " + startStation + " to " + endStation + " ***********/");

    // saving start line name and start station name in the startStationObj object
    var startStationObj = {
        lineName: startLineName,
        station: startStation
    };

    // saving end line name and end station name in the endStationObj object
    var endStationObj = {
        lineName: endLineName,
        station: endStation
    };

    // saving line name Index from trainlines array of objects into lineIndexObj - for e.g the index for line "T4" will be 2
    var lineIndexObj = getLineIndex(startStationObj, endStationObj);

    // saving station name Index from trainlines array of objects into stationIndexObj by passing the lineIndexObj into the function - for e.g Carlton index will be 2 in line T4.
    var stationIndexObj = getStationIndex(startStationObj, endStationObj);

    // after saving line and station index data, the app will check if the stations provided exist in the system. The object stationIndexObj has the start and end station index values, if one of the index is equal to -1 that means that station hasn't been found
    if (stationIndexObj.startStationIndex !== -1 && stationIndexObj.endStationIndex !== -1) {

        // checking if the start and end stations are not the same, if they are the same it will log out "You are already on that station, please change the destination"
        if (startStation.toLowerCase() !== endStation.toLowerCase()) {

            //after checking the station names, the app will check if the start and end lines are same or not, if they are the same then the journey will only be on one line otherwise the journey will be on two different lines and app needs to find out the common station in both lines to proceed further
            if (!checkOnSameLine(startLineName, endLineName)) {

                // finding out the common station in the lines provided, common station is required to continue the journey and change over the trains. The function getCommonStation returns all the common stations in the two lines provided. There can be a case where there are more than one common station in two lines. In that case, the app will then find most closest common station to the starting point so that passenger can change over the train as quickly as possible
                var commonStationArray = getCommonStation(lineIndexObj, stationIndexObj);

                // checking if there are any common stations found, if there are no common stations then the app will log out that there are no common stations found, please consider arranging alternate transport
                if (commonStationArray.length > 0) {

                    // finding the most closest common station from the starting point
                    var commonStationObj = getClosestCommonStation(commonStationArray);

                    // after finding the closes common station, the bottom function will be called to log out the results with all the journey details
                    var routeObj = getStationNamesOnDifferentLines(lineIndexObj, stationIndexObj, commonStationObj);

                } else {
                    // app will log out the below if there are no common stations found between two lines
                    console.log("No common station found, please consider an alternate option");
                }
            } else {
                // if lines are the same, the bottom function is called to log out the result with all the journey details on the same line
                var routeObj = getStationNamesOnSameLine(lineIndexObj, stationIndexObj);

            }
        } else {
            // app will log out the below if start station is similar to the end station
            console.log("You are already on " + startStation + " station");
        }
    } else {
        // app will log out the below if one of station provided does not exist into the system.
        console.log("One of the stations do no exist on the line you have mentioned.");
    }
    return routeObj;
}

// travelFrom("t6", "Milsons point", "t1", "Penrith");

// travelFrom("t1", "Strathfield", "t1", "strathfield");

// travelFrom("t1", "Strathfield", "t1", "Parramatta");

// travelFrom("t4", "Carlton", "t1", "Penrith");

// travelFrom("t6", "burWood", "t6", "Dundas");

// travelFrom("t4", "Kings Cross", "t6", "Milsons point");

// travelFrom("t1", "penrith", "t6", "milsons point");