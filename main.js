img="";

function preload(){
img= loadImage("dog_cat.jpg");
}

function setup(){
canvas= createCanvas(640,420);
canvas.center();

}

function draw(){
image( img , 0 , 0 , 640, 420);
fill("yellow");
stroke("black");
noFill();
rect(80, 60, 250, 350);
text("Dog", 85, 70);


}