function preload() {
}

function draw(){
    image(video,50,50,500,500)
}

function take() {
    save("filter") 
}
function setup(){
    canvas=createCanvas(420, 350);

    canvas.position(520,290);
    video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose',gotposes)
}


        
function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("ear x =" + results[0].pose.leftEar.x)
        console.log("ear y =" + results[0].pose.rightEar.y)
    }
}

function modelloaded(){
    console.log('posnet is initialized');
}