import React, { useEffect, useState, useRef, Component } from 'react';
import TFToVideo from './TFToVideo';
import {sendToModel} from './model'
let _stream;
var image = ''
var currentEmotion = "SAD"
const placeholderText = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"];

function Video() {
  const [index, setIndex] = useState(0);
    const camaraRef = useRef();
    useEffect(() => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          _stream = stream;
          camaraRef.current.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log('Something went wrong!', err0r);
        });
        const timer = () => {
          setIndex(prevIndex => {
            if(prevIndex === placeholderText.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer,10000);

      return () => {
        if (_stream) {
          _stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }
        clearInterval(timer); 
      };
    }, []);
    return (
      <div id = 'align'>
        <div id="container">
            <div id="navi">
                <video
                    style={{ width: '700px', height: '500px'}}
                    autoPlay
                    muted
                    controls
                    id="videoId"
                    ref={camaraRef}
                ></video>
            </div>
            <div id="infoi">
                <TFToVideo videoId="videoId"></TFToVideo>
            </div>
        </div>
        <div id = 'containerLeft'>
          <h2> Current Emotion: {placeholderText[index]}</h2>
        </div>
      </div>

    );
  }


export default Video