// Blueprint
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        //console.log('A person was born');
    }
    sayHiTo(name) {
        console.log(`Hello ${this.name}`);
    }
};

// Instace
// Instantiating -> It calls the constructor@

const bill = new Person("Bill", "bill@ga.co");
const jane = new Person("Jane", "jane@ga.co");

bill.sayHiTo();
jane.sayHiTo();

// Book
// author
// title
// constructor
// read()

class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
    read() {
        console.log(`You are currently reading ${this.title} by ${this.author}`);
    }
}

var dota = new Book("AJ", "Dota2 pro guide");
var love = new Book("SK", "The Notebook");

dota.read();
love.read();


class User {
    constructor(name, username) {
        this.name = name;
        this.username = username;
        console.log("User logged in", this);
    }
    readPost() {
        console.log(`${this.username} is reading the post`);
    }
    commentOnPost() {
        console.log(`${this.username} just commented`);
    }
}
const userOne = new User("Bill", "billyboy");

userOne.readPost();

userOne.commentOnPost();

class Admin extends User {
    constructor(name, username) {
        super(name, username); //This calls user contructor
        console.log("An admin logged in", this);
    }
    deletePost() {
        console.log(`${this.username} deleted a post`);
    }
}

const adminOne = new Admin("AJ", "ahsan_aj"); // This calls Admin constructor

adminOne.deletePost();