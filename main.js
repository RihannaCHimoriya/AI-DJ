song = "";
right_w_x=0
right_w_y=0
left_w_y=0
left_w_x=0
score_right=0
score_left=0
function preload() {
    song = loadSound("music.mp3")
}


function setup() {
    canvas = createCanvas(600, 500)
    canvas.position(350, 150)
    video = createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
}
function modelloaded(){
    console.log("model loaded initially")
}
function draw() {
    image(video, 0, 0, 600, 500)
}

function playsong() {
    song.play()
    song.rate(1) //rate can have values like 0.5 , 1.5 , 2 and 2.5
    song.setVolume(1) //Volume can have values like ,0.1,0.2,0.3 ...,etc
}

function stopsong(){
    song.stop()
}