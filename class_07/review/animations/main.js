var bill = document.querySelector(".move");
var billCSS = getComputedStyle(bill);

bill.style.position = "absolute";
bill.style.top = "0px";
bill.style.right = "0px";

function moveBillToBottom() {
    var currentHeight = parseInt(billCSS.height, 10);
    var currentTop = parseInt(billCSS.top, 10);
    var newTop = currentTop + 10;
    console.log(currentHeight);
    bill.style.top = newTop + "px";
    if (newTop + currentHeight < window.innerHeight) {
        setTimeout(moveBillToBottom, 5);
    }
    //setTimeout(moveBillToBottom, 50);
}

bill.addEventListener("click", moveBillToBottom);