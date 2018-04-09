var img = document.querySelectorAll("img");

function getImageWidth(imgElement) {
    console.log(imgElement.width + "px");
}

function changeBorder(imgElement) {
    for (var i = 0; i < img.length; i += 1) {
        img[i].style.border = "none";
    }
    imgElement.style.border = "2px solid red";
}

for (var i = 0; i < img.length; i += 1) {
    img[i].addEventListener("click", function(event) {
        getImageWidth(event.target);
        changeBorder(event.target);
    });
}