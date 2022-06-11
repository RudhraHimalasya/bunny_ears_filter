leftEar = 0;
rightEar = 0;


function preload() {
    bunny_ears = loadImage("https://i.postimg.cc/9FPb5VHT/cute-easter-bunny-ears-digital-illustration-173599863-removebg-preview.png");
}

function draw(){
    image(video,50,50,500,500)
    image(bunny_ears , leftEar ,rightEar );
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
        leftEar = results[0].pose.leftEar.x;
        rightEar = results[0].pose.rightEar.y;
        console.log(results);
        console.log("ear x =" + results[0].pose.leftEar.x)
        console.log("ear y =" + results[0].pose.rightEar.y)
    }
}

function modelloaded(){
    console.log('posnet is initialized');
}