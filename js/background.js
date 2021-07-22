const backImageList = ["0.jpg","1.jpg","2.jpg"];

const selectedImage = backImageList[Math.floor(Math.random() * backImageList.length)];

function paintBackImage() {
    const backImage = `url("img/${selectedImage}")`;
    console.log(backImage);
    document.body.style.backgroundImage = backImage;
}

paintBackImage();