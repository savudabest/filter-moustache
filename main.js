mX = 0;
mY = 0;

function preload(){
stache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
canvas = createCanvas(300,230);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide;
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
console.log('model loaded');
}

function draw(){
image(video,0,0,300,230);
image(stache,mX,mY,40,30);
}

function take_snapshot(){
save('myFilterImage.png');

}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        mX = results[0].pose.nose.x -20;
        mY = results[0].pose.nose.y - 29;
        console.log("nose x = "+mX);
        console.log("nose y = "+mY);
        console.log(results);
    }
}