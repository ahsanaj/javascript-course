var catImg = document.querySelector(".walking-cat");
var screenWidth = window.innerWidth;
var catCss = getComputedStyle(catImg);
var catCurrentLeft = parseInt(catCss.left, 10);
var catWidth = 296;
var crowdAudio = document.querySelector("#crowd-audio");
var goalAudio = document.querySelector("#goal-audio");
var celebrationDiv = document.querySelector(".celebration");
var gameStarted = false;

function catWalkForward() {
    catCurrentLeft = catCurrentLeft + 1;
    catImg.style.left = catCurrentLeft + "px";
    //console.log(catCurrentLeft,window.innerWidth - catWidth);
    if (catCurrentLeft < (screenWidth - catWidth)) {
        setTimeout(catWalkForward, 1);
    } else {
        catImg.style.transform = "scale(-1,1)";
        catWalkBackWard();
    }
}

function catWalkBackWard() {
    catCurrentLeft = catCurrentLeft - 1;
    catImg.style.left = catCurrentLeft + "px";
    //console.log(catCurrentLeft,window.innerWidth - catWidth);
    if (!gameStarted) {
        if (catCurrentLeft === Math.floor(screenWidth / 2)) {
            setSoccerStadium();
            catImg.style.display = "none";
        } else if (catCurrentLeft >= 8) {
            setTimeout(catWalkBackWard, 1);
        } else {
            catImg.style.transform = "scale(1,1)";
            catWalkForward();
        }
    } else {
        if (catCurrentLeft >= 8) {
            setTimeout(catWalkBackWard, 1);
        } else {
            catImg.style.transform = "scale(1,1)";
            catWalkForward();
        }
    }
}

function setSoccerStadium() {
    gameStarted = true;
    crowdAudio.play();
    var ballImg = document.createElement("img");
    ballImg.src = "ball.png";
    ballImg.width = "50";
    ballImg.style.position = "absolute";
    ballImg.id = "ball-img";
    var ballCurrentRight = 855;
    var ballCurrentBottom = 35;

    ballImg.style.right = ballCurrentRight + "px";
    ballImg.style.bottom = ballCurrentBottom + "px";

    document.body.appendChild(ballImg);

    var personImg = document.createElement("img");
    personImg.src = "kick.png";
    personImg.width = "300";
    personImg.id = "kick-img";
    personImg.style.position = "absolute";
    personImg.style.right = "880px";
    personImg.style.bottom = "30px";

    document.body.appendChild(personImg);

    var postImg = document.createElement("img");
    postImg.src = "post.jpg";
    postImg.width = "500";
    postImg.id = "post-img";
    postImg.style.position = "absolute";
    postImg.style.right = "30px";
    postImg.style.bottom = "240px";

    document.body.appendChild(postImg);

    var h1 = document.createElement("h1");
    h1.innerText = "Press spacebar to kick";
    document.body.appendChild(h1);

    document.body.style.background = "url(stadium.jpg) no-repeat 45% 40%";

    document.body.addEventListener("keypress", function(event) {
        if (event.keyCode === 32) {
            crowdAudio.pause();
            crowdAudio.currentTime = 0;
            goalAudio.play();
            h1.innerText = "Great KICK!";
            animateSoccerBall(ballCurrentRight, ballCurrentBottom);
            setTimeout(hideSoccerGame, 13000);
        }
    });
}

function animateSoccerBall(currentRight, currentBottom) {
    var ballImg = document.querySelector("#ball-img");
    console.log(currentRight);
    currentRight = currentRight - 5;
    currentBottom = currentBottom + 3;
    ballImg.style.right = currentRight + "px";
    ballImg.style.bottom = currentBottom + "px";

    if (currentRight >= 310) {
        setTimeout(function() {
            animateSoccerBall(currentRight, currentBottom);
        }, 10);
    } else {
        var h1 = document.querySelector("h1");
        h1.innerText = "GOAL!";
        h1.style.color = "Yellow";
        celebrationDiv.style.display = "block";
    }
}

function hideSoccerGame() {
    goalAudio.pause();
    goalAudio.currentTime = 0;
    document.body.style.background = "none";
    document.querySelector("h1").style.display = "none";
    celebrationDiv.style.display = "none";
    catImg.style.display = "block";
    document.querySelector("#post-img").style.display = "none";
    document.querySelector("#ball-img").style.display = "none";
    document.querySelector("#kick-img").style.display = "none";
    catWalkBackWard();
}
catWalkForward();
//setSoccerStadium();