var button = document.querySelector("button");

function showAlert() {
    alert("Button has been clicked");
}

//button.addEventListener("click", showAlert);

var img = document.querySelector("img");

function imgHover() {
    img.style.border = "1px solid hotpink";
}

function imgMouseOut() {
    img.style.border = "none";
}

img.addEventListener("mouseover", imgHover);
img.addEventListener("mouseout", imgMouseOut);

// contextmenu event is right-click

function windowResized() {
    console.log("window was resized to " + window.innerWidth);
}

window.addEventListener("resize", windowResized);

// Create an image, set the src to nick cage, add it to the page
// Add an event listerner and log nick was clicked

var nickImg = document.createElement("img");

function nickOnClick() {
    console.log("nick was clicked");
}

nickImg.addEventListener("click", nickOnClick);

nickImg.setAttribute("src", "http://placecage.com/200/200");

document.body.appendChild(nickImg);

var createAccountButton = document.querySelector(".create");

function createAccount() {
    var email = document.querySelector("#email").value;

    var username = document.querySelector("#username").value;

    var message = email + " " + username;
    console.log(message);
}

createAccountButton.addEventListener("click", createAccount);

var targetInput = document.querySelector(".type");

function onKeyPress(event) {
    var p = document.createElement("p");
    p.innerText = "You typed " + event.key;
    document.body.appendChild(p);
    console.log(event.timeStamp);
}

targetInput.addEventListener("keypress", onKeyPress);

window.addEventListener("mousemove", function(event) {
    //console.log(event.timeStamp);
    var billImg = document.querySelector(".move");
    billImg.style.left = (event.clientX) - 50 + "px";
    billImg.style.top = (event.clientY) - 50 + "px";
});