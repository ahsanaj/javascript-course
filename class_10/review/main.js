function getUsers() {
    var users = ["Bill", "Jill", "Gill"];
    return new Promise(function(resolve, reject) {
        //resolve(users);
        reject("Error");
    });
}

getUsers()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(errorMessage) {
        console.warn(errorMessage);
    });