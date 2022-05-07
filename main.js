function preload()
{
clown_nose = loadImage(
  "https://i.postimg.cc/1t0KrPjj/istockphoto-1192834521-612x612-removebg-preview.png"
    );
    cat_filter = loadImage(
      "https://i.postimg.cc/HkBRbqNz/cat-animal-face-filter-template-video-chat-photo-vector-16740168-removebg-preview.png"
    );
}
noseX = 0;
noseY = 0;
function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw()
{
    image(video, 0, 0, 300, 300)
    image(cat_filter,noseX-180,noseY-200,350,350)
}

function take_snapshot()
{
   save("me.png") 
}

function modelLoaded()
{
    console.log("poseNet Model is successfully loaded")
}

function gotPoses(results)
{
if (results.length > 0) {
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nosex = " + results[0].pose.nose.x);
    console.log("nosey = " + results[0].pose.nose.y);
}
}