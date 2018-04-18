// Creating Promises

var promise = new Promise(function(resolve, reject) {
    resolve("This task has finished running");
    reject("This task has been unsuccessful");
});

promise.then(function(data) {
    //console.log("The promise was fulfilled", data);
}).catch(function(error) {
    //console.log(error);
});

console.clear();

function createPromise() {
    return new Promise(function(resolve, reject) {
        resolve("The promise was fulfilled");
    });
}

createPromise().then(function() {
    //console.log("Something");
});

function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I waited some amount of time for you");
        }, time);
    });
}

delay(2000).then(function(resultMessage) {
    console.log(resultMessage);
});

function makeAPIRequest() {
    var waitTime = Math.random() * 3000;
    return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            if (waitTime < 1500) {
                resolve("We got the data back for you in " + waitTime / 1000 + " seconds.");
            } else {
                reject("Request timedout");
            }
        }, waitTime);
    });
}

makeAPIRequest()
    .then(function(resultMessage) {
        console.log(resultMessage);
    })
    .catch(function(errorMessage) {
        console.log(errorMessage);
    });

function giveEmployeePhone() {
    return new Promise(function(resolve, reject) {
        var generous = false;
        if (generous) {
            resolve("Here is your phone");
        } else {
            reject("The call failed");
        }
    });
}

giveEmployeePhone()
    .then(function(resultMessage) {
        console.log(resultMessage);
    })
    .catch(function(errorMessage) {
        console.log(errorMessage);
    });

function getAllUsers() {
    var brothers = ["Groucho", "Harpo", "Chico"];
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() <= 0.5) {
                resolve(brothers);
            } else {
                reject("Sorry, the API request failed");
            }
        }, 1500);
    });
}

function displayUsers(users) {
    document.body.innerHTML = users;
}

function showErrorMessage(message) {
    document.body.innerHTML = message;
}

document.body.innerHTML = "Loading...";

getAllUsers()
    .then(displayUsers)
    .catch(showErrorMessage);

navigator.getBattery().then(function(data) { console.log(data.level * 100 + "%") });