// Working with Users
// Starting with this data...

// var users = [
//   {
//     email: "groucho@ga.co",
//     password: "chicken",
//     isAdmin: true
//   },
//   {
//     email: "harpo@ga.co",
//     password: "elephant",
//     isAdmin: false
//   },
//   {
//     email: "gummo@ga.co",
//     password: "pinkFairyArmadillo",
//     isAdmin: true
//   },
//   {
//     email: "zeppo@ga.co",
//     password: "dumboOctopus",
//     isAdmin: false
//   }
// ];
// Create a function that receives a user object, and prints out whether they are an admin or not.

// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

// Bonus
// Don't receive an ID! Find the user based on the email
// Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
// Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature

// Declaring users array of objects to save user details

var users = [{
        email: "groucho@ga.co",
        password: "chicken",
        isAdmin: true
    },
    {
        email: "harpo@ga.co",
        password: "elephant",
        isAdmin: false
    },
    {
        email: "gummo@ga.co",
        password: "pinkFairyArmadillo",
        isAdmin: true
    },
    {
        email: "zeppo@ga.co",
        password: "dumboOctopus",
        isAdmin: false
    }
];

// Declaring isAdmin function to check whether the user in the users array of objects is an Admin or not. This function accepts object as its parameter

function isAdmin(users) {
    console.log(users.length);
    for (var i = 0; i < users.length; i += 1) {
        var currentUser = users[i];
        currentUser.isAdmin ? console.log(currentUser.email + " is an Admin") :
            console.log(currentUser.email + " is not an Admin");
    }
}

// Declaring checkLoginExists function to check if user exists in the users array of objects. It accepts email as a parameter and returns the index if the user is found, otherwise it resturn -1. This approach is used because the index value can be used to get the user details later in the project

function checkLoginExists(email) {
    for (var i = 0; i < users.length; i += 1) {
        var currentUser = users[i];
        if (currentUser.email.toLowerCase() === email.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

// Declaring loginAccount which accepts index, email and password as parameters. If the email and password are correct, it logs out you are logged in, otherwise it will log out Something went wrong!. If the index is not provided, a for loop will be required to loop through all the objects in the array.

function loginAccount(index, email, password) {
    var currentUser = users[index];
    if (currentUser.email.toLowerCase() === email.toLowerCase() && currentUser.password === password) {
        console.log("You are logged in");
    } else {
        console.log("Something went wrong!");
    }

}

// Declaring createAccount function to create a new user and add it to the users array. It accepts email,password and isAdmin as its parameters. It first checks if the login exists in the system. If the login doesn't exist it goes on and creates a new user object and push it to users array, otherwise it logs out The email already exists into the system.

function createAccount(email, password, isAdmin) {
    if (checkLoginExists(email) === -1) {
        var newUser = {};
        newUser.email = email;
        newUser.password = password;
        newUser.isAdmin = isAdmin;

        users.push(newUser);
        console.log("The account " + email + " has successfully been added into the system");
    } else {
        console.log("The email already exists in the system");
    }

}

// Declaring deleteAccount function to delete an existing user and remove it from the users array. It accepts email and password  as its parameters. It first checks if the login exists in the system. If the login exist it goes on and the checks if the password is correct. If the password is correct it goes on and delete the user from the users array.

function deleteAccount(email, password) {
    var accountIndex = checkLoginExists(email);
    if (accountIndex !== -1) {
        if (users[accountIndex].password === password) {
            users.splice(accountIndex, 1);
            console.log("The account " + email + " has successfully been deleted from the system");
        } else {
            console.log("Please provide the correct password to delete the " + email + " account.");
        }
    } else {
        console.log("The email does not exist in the system");
    }
}

// Declaring updateAccount function to update an existing user in the users array. It accepts email, currentPassword and a user object as its parameters. It first checks if the login exists in the system. If the login exist it goes on and the checks if the password is correct. If the password is correct it goes on and updates the users array.

function updateAccount(email, currentPassword, userObj) {
    var accountIndex = checkLoginExists(email);
    if (accountIndex !== -1) {
        if (users[accountIndex].password === currentPassword) {
            users[accountIndex].password = userObj.password;
            users[accountIndex].isAdmin = userObj.isAdmin;
            console.log("The account " + email + " has successfully been udpated.");
        } else {
            console.log("Please provide the correct password to update the " + email + " account.");
        }
    } else {
        console.log("The email does not exist in the system");
    }

}

// Declaring searchUser function to search the details of an existing user from the users array. It accepts email as its parameter. It first checks if the login exists in the system. If the login exists it returns the user object, otherwise it logs out "No results found".

function searchUser(email) {
    var searchResults = {};
    var accountIndex = checkLoginExists(email);
    if (accountIndex !== -1) {
        searchResults = Object.assign({}, users[accountIndex]);
    } else {
        console.log("No results found");
    }
    return searchResults;
}

isAdmin(users);

loginAccount(3, "Zeppo@ga.co", "dumboOctopus");

console.log(checkLoginExists("gummo@ga.co"));

createAccount("chico@gmail.com", "redLippedBatfish", false);

deleteAccount("harpo@ga.co", "elephant");

updateAccount("Zeppo@ga.co", "dumboOctopus", { password: "gharial", isAdmin: false });

createAccount("aj.ahsanjawed@gmail.com", "fishandchips", true);

createAccount("liverpoolfc@soccer.com", "salah", false);

createAccount("microsoft@xbox.com", "kinect", false);

console.log(searchUser("aj2.ahsanjawed@gmail.com"));