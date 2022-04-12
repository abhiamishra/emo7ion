import React from 'react';

//var cv = require('./video_files/opencv.js')
//var Utils = require('./video_files/opencv.js')

//var myHTML = require('../../public/open_faces.html');

class Video extends React.Component {
    render(){
      return(
      <>

        <h1>Video</h1>
        <video id="cam_input" height="240" width="320"></video>
        <canvas id="canvas_output" height="240" width="320"></canvas>

      </>
      );
    }
    /*
    openCvReady() {
      cv['onRuntimeInitialized']=()=>{
        let video = document.getElementById("cam_input"); // video is the id of video tag
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("An error occurred! " + err);
        });
        let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
        let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
        let gray = new cv.Mat();
        let cap = new cv.VideoCapture(video);
        let faces = new cv.RectVector();
        let classifier = new cv.CascadeClassifier();
        let utils = new Utils('errorMessage');
        let faceCascadeFile = 'haarcascade_frontalface_default.xml'; // path to xml
        utils.createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {
        classifier.load(faceCascadeFile); // in the callback, load the cascade from file
    });
        const FPS = 40;
        function processVideo() {

            let canvas = document.getElementById('canvas_output');
            let ctx = canvas.getContext('2d');


            let begin = Date.now();
            cap.read(src);
            src.copyTo(dst);
            cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);
            try{
                classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
                console.log(faces.size());
            }catch(err){
                console.log(err);
            }
            for (let i = 0; i < faces.size(); ++i) {
                let face = faces.get(i);
                let point1 = new cv.Point(face.x, face.y);
                let point2 = new cv.Point(face.x + face.width, face.y + face.height);
                cv.rectangle(dst, point1, point2, [255, 0, 0, 255]);
                //ctx.beginPath();
                //ctx.moveTo(face.x, face.y);
                //ctx.lineTo(face.x + face.width, face.y + face.height);
                //ctx.stroke();
                //ctx.lineWidth = 10;

                //base_image = new Image();
                //base_image.src = 'emojis/happy.png';
                //base_image.onload = function(){

                  //console.log("here");
                //}
            }
            cv.imshow("canvas_output", dst);
            // schedule next one.
            let delay = 1000/FPS - (Date.now() - begin);
            setTimeout(processVideo, delay);
    }
    // schedule first one.
    setTimeout(processVideo, 0);
      };
    } */

}

export default Video
