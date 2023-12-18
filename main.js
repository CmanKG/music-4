leftwrist_x
leftwrist_y
rightwrist_x
rightwrist_y
song=""
function preload(){
    song1=loadSound("Lil Mama")
    song2=loadSound("Fursat")
}
function setup(){
    canvas=createCanvas(550,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function draw(){
    image(video,0,0,550,550)
    fill("red")
    stroke("red")
    circle(leftwrist_x,leftwrist_y,20)
    fill("red")
    stroke("red")
    circle(rightwrist_x,rightwrist_y,20)
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log("posenetisinitialized")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        leftwrist_x=results[0].pose.leftWrist.x
        leftwrist_y=results[0].pose.leftWrist.y
        rightwrist_x=results[0].pose.rightWrist.x
        rightwrist_y=results[0].pose.rightWrist.y
        console.log(leftwrist_x,leftwrist_y,rightwrist_x,rightwrist_y)
    }
}