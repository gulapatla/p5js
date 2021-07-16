function preload(){

}
function setup(){
canvas = createCanvas(640, 480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
tint_colour = ""; 
}
function draw(){
    image(video, 50 , 60 , 540, 380);
    tint(tint_colour);

    fill(255,0,0);
    stroke(255,0,0);
    circle(610, 30, 60);

    fill(255,0,0);
    stroke(255,0,0);
    circle(30, 30, 60);

    fill(255,0,0);
    stroke(255,0,0);
    circle(30, 450, 60);


    fill(255,0,0);
    stroke(255,0,0);
    circle(610, 450, 60);

    fill(0,255,0);
    stroke(0,255,0);
    rect(40, 25, 560, 20, 90);

    fill(0,255,0);
    stroke(0,255,0);
    rect(40, 440, 560, 20, 90);
  



}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_colour= document.getElementById("colour_name").value;

}