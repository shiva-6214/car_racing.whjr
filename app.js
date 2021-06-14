var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_img = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_img = "car2.png";
var car2_x = 10;
var car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38") {
        car1_up();
        console.log("up arrow key");
    }

    if(keypressed == "40") {
        car1_down();
        console.log("down arrow key");
    }

    if(keypressed == "37") {
        car1_left();
        console.log("left arrow key");
    }

    if(keypressed == "39") {
        car1_right();
        console.log("right arrow key");
    }

    if(keypressed == "87") {
        car2_up();
        console.log("key w");
    }

    if(keypressed == "83") {
        car2_down();
        console.log("key s");
    }

    if(keypressed == "65") {
        car2_left();
        console.log("key a");
    }

    if(keypressed == "68") {
        car2_right();
        console.log("key d");
    }
}