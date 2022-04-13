import React, { useEffect, useRef } from 'react';
import TFToVideo from './TFToVideo';
// import {Image, Model} from './model'
let _stream;
var image = ''

function Video() {
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
      return () => {
        if (_stream) {
          _stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }
        function screenshot() {
          // const imageSrc = camaraRef.current.getScreenshot()
          // const face = Image(imageSrc)
          // const emotion = Model(face)
          // console.log(emotion)
          
       }
      };
    }, []);
    return (
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
        {/* <div>
          <img scr = {image} alt = "screenshot"></img>
        </div> */}
  </div>

    );
  }


export default Video