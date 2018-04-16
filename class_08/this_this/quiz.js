console.log(this);

var book = {
    author: "Brian Greene",
    read: function() {
        console.log(this);
    }
};

book.read();

var img = document.querySelector("img");
img.addEventListener("click", function() {
    console.log(this);
});

function sayHi() {
    console.log(this);
}

sayHi.call(windows);
sayHi.apply({ name: "Groucho" });
var gummo = { name: "Gummo" };
var gummosHi = sayHi.bind(gummo);
gummosHi();

function Class(className) {
    this.className = className;
    console.log(this);
}

var jsCourse = new Class("JSD");