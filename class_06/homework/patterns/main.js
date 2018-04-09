function generateImage() {
    var imgTag = document.createElement("img");

    var randomWidth = Math.ceil(Math.random() * 300) + 50;
    var randomHeight = Math.ceil(Math.random() * 400) + 50;

    imgTag.setAttribute("src", "https://picsum.photos/" + randomWidth + "/" + randomHeight);

    document.body.appendChild(imgTag);

}

//generateImage();
setInterval(generateImage, 1000);