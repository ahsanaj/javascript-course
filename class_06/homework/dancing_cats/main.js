var img = document.querySelector("img");

var cssImg = getComputedStyle(img);

var currentLeft = parseInt(cssImg.left, 10);

var width = parseInt(cssImg.width, 10);


function catWalkRTL() {

    currentLeft -= 10;

    var newLeft = currentLeft;

    img.style.left = newLeft + "px";

    if (newLeft >= 8) {
        setTimeout(catWalkRTL, 50);
    } else {
        img.style.transform = "rotate(360deg)";
        catWalkLTR();
    }

}

function catWalkLTR() {

    currentLeft += 10;

    var newLeft = currentLeft;

    img.style.left = newLeft + "px";

    if (newLeft === (window.innerHeight / 2)) {
        setTimeout(function() {
            if (newLeft <= (window.innerWidth - width)) {
                setTimeout(catWalkLTR, 50);
            } else {
                img.style.transform = "rotate(180deg)";
                catWalkRTL();
            }
        }, 10000);
    } else if (newLeft <= (window.innerWidth - width)) {
        setTimeout(catWalkLTR, 50);
    } else {
        img.style.transform = "rotate(180deg)";
        catWalkRTL();
    }

}
catWalkLTR();