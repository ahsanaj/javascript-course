var billImg = document.querySelector(".move");

var nickImg = document.querySelector(".nick");

function fadeBillAway() {
    var currentOpacityAsString = getComputedStyle(billImg).opacity;
    var currentOpacity = parseFloat(currentOpacityAsString, 10);
    var newOpacity = currentOpacity - 0.1;
    billImg.style.opacity = newOpacity;
    if (newOpacity >= 0) {
        window.setTimeout(fadeBillAway, 100);
    }
}
fadeBillAway();

function increaseNickWidth() {
    var currentWidthAsString = getComputedStyle(nickImg).width;
    var currentWidth = parseInt(currentWidthAsString, 10);

    if (newWidth <= 500) {
        var newWidth = currentWidth + 10;
        nickImg.style.width = newWidth + "px";
        window.setTimeout(increaseNickWidth, 1000 / 60);
    } else {
        var newWidth = currentWidth - 10;
        nickImg.style.width = newWidth + "px";
        window.setTimeout(increaseNickWidth, 1000 / 60);
    }
}
increaseNickWidth();