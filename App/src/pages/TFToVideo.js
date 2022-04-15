import React, { useEffect, useRef, useState } from 'react';
import {download} from './model'
// import {setPic} from './model'
let model;
export default function TFToVideo(props) {
  const [childElementSize, setChildElementSize] = useState({
    width: 100,
    height: 70,
  });
  const canvasRef = useRef();
  const contextRef = useRef();

  const canvasOnVideoRef = useRef();
  const contextOnVideoRef = useRef();

  useEffect(() => {
    window.addEventListener('resize', initiateResizeFunction, false);
    async function init() {
      model = await window.blazeface.load();
      console.log('model >', model);
    }
    init();
    initializeCanvas();
    initiateResizeFunction();
    return () => {
      window.removeEventListener('resize', initiateResizeFunction);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      loadDataProccessing();
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [childElementSize]);

  const initiateResizeFunction = () => {
    const videoElement = document.getElementById(props.videoId);
    const width = videoElement.offsetWidth;
    const height = videoElement.offsetHeight;
    document.getElementById('hiddenCanvas').style.width = `${width}px`;
    document.getElementById('hiddenCanvas').style.height = `${height}px`;
    document.getElementById('onTopCanvas').style.width = `${width}px`;
    document.getElementById('onTopCanvas').style.height = `${height}px`;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = width;
    canvasRef.current.style.height = height;
    canvasOnVideoRef.current.width = width;
    canvasOnVideoRef.current.height = height;
    canvasOnVideoRef.current.style.width = width;
    canvasOnVideoRef.current.style.height = height;
    contextOnVideoRef.current.lineCap = 'round';
    contextOnVideoRef.current.strokeStyle = 'green';
    contextOnVideoRef.current.lineWidth = 5;
    // console.log('hey', canvasRef.current.width, canvasRef.current.height);
    setChildElementSize({ width, height });
  };
  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = childElementSize.width;
    canvas.height = childElementSize.height;
    canvas.style.width = `${childElementSize.width}px`;
    canvas.style.height = `${childElementSize.height}px`;
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'green';
    context.lineWidth = 5;
    contextRef.current = context;

    const canvasOnVideo = canvasOnVideoRef.current;
    canvasOnVideo.width = childElementSize.width * 2;
    canvasOnVideo.height = childElementSize.height * 2;
    canvasOnVideo.style.width = `${childElementSize.width}px`;
    canvasOnVideo.style.height = `${childElementSize.height}px`;
    const contextOnVideo = canvasOnVideo.getContext('2d');
    contextOnVideo.scale(2, 2);
    contextOnVideo.lineCap = 'round';
    contextOnVideo.strokeStyle = 'green';
    contextOnVideo.lineWidth = 5;
    contextOnVideoRef.current = contextOnVideo;
  };
  const takePhoto = async () => {
    const video = document.querySelector('video');
    await contextRef.current.drawImage(
      video,
      0,
      0,
      childElementSize.width,
      childElementSize.height
    );
    var data = canvasRef.current.toDataURL('image/png');
    var photo = document.getElementById('imageTag');
    photo.setAttribute('src', data);
  };

  const screenshot = async () => {
    const video = document.querySelector('video');
    await contextRef.current.drawImage(
      video,
      0,
      0,
      childElementSize.width,
      childElementSize.height
    );
    var image = canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    //window.location.href=image; // it will save locally
    var dataURL = canvasRef.current.toDataURL()
    //await setInterval(download(dataURL), 10000); //send face img URL (data) to model function
    await setInterval(download(image), 10000); //send face img to model function
    console.log('done')
 }
 setInterval(screenshot, 10000)

  const loadDataProccessing = async () => {
    const returnTensors = false;
    await takePhoto();
    if (model) {
      const predictions = await model.estimateFaces(
        document.querySelector('img'),
        returnTensors
      );
      if (predictions.length > 0) {
        for (let i = 0; i < predictions.length; i++) {
          const start = predictions[i].topLeft;
          const end = predictions[i].bottomRight;
          const size = [(end[0] - start[0]) +20, (end[1] - start[1]) +20];
          // console.log(canvasRef.current.width, canvasRef.current.height);
          console.log(start[0], start[1], size[0], size[1]);
          // Render a rectangle over each detected face.
          contextOnVideoRef.current.clearRect(
            0,
            0,
            childElementSize.width,
            childElementSize.height
          );
          contextOnVideoRef.current.beginPath();
          contextOnVideoRef.current.rect(start[0], start[1], size[0], size[1]);
          contextOnVideoRef.current.stroke();
          contextOnVideoRef.current.closePath();
        }
      }
    } else {
      console.log('no model');
    }
  };

  return (
    <div className="App">
      {props.children}
      <img
        src=""
        alt=""
        id="imageTag"
        width={`${childElementSize.width}`}
        height={`${childElementSize.height}`}
        hidden
      />
      <canvas id="hiddenCanvas" ref={canvasRef} hidden></canvas>
      <canvas
        id="onTopCanvas"
        className="topCanvas"
        ref={canvasOnVideoRef}
      ></canvas>
    </div>
  );
}