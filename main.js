canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {

    background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image; // load image

    rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image; // load image
}                                         

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, canvas.width, canvas.height)
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
        if(keypressed == 38) {

            up();
            console.log("up");
        }
		if(keypressed == 40) {

            down();
            console.log("down");
        } 
        if(keypressed == 37) {

            left();
            console.log("left");
        }
        if(keypressed == 39) {

            right();
            console.log("right");
        }
}

function up(){
    if(rover _y >=0){
        rover _y = rover _y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover _y <=500){
        rover _y = rover _y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y =" +rover_y);
        uploadBackground();
          uploadrover();
    }
}
function right(){
    if(rover rover_x >=0){
        rover _x = rover _x - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y =" +rover_y);
        uploadBackground();
          uploadrover();
    }
}
function left(){
    if(rover _y <=700){
        rover _x = rover _x + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}

nasa_mars_images_array = ["nasa_image_1_jpg", "nasa_image_2_jpeg", "nasa_image_3_jpg", "nasa_image_4_jpg",];
random_number = Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_number]
console.log("background_image = " + background_image)



