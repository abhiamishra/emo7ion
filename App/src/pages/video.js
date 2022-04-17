import React, { useEffect, useState, useRef, Component } from 'react';
import TFToVideo from './TFToVideo';
import {sendToModel} from './model'
import Chart from './Components/Chart';


import DoughnutChart from './Components/DoughnutChart';
/*
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor() {
    super();

    this.chartReference = React.createRef();
    this.state = {
      name: 'React',
      data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
          data: [5, 7, 6],
          backgroundColor: ['red', 'green', 'blue']
        }]
      }
    };

    setInterval(() => {
      const chart = this.chartReference.current.chartInstance;
      chart.data.datasets[0].data = [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
      ];
      chart.update();
    }, 2000);
  }

  render() {
    return (
      <DoughnutChart ref={this.chartReference} data={this.state.data} />
    );
  }
}
*/

let _stream;
var image = ''
var currentEmotion = "SAD"
const placeholderText = [" ", "Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"];
const suggestions = [" ", "Unless discussing a topic you feel anger towards, try to smile for your audience!", "Unless discussing a topic that rightfully disgusts you, try to show more enthusiasm for your audience!", "You look fearful. Be more confident: try sitting up strait and smiling!", "You look happy! This will make your audience feel more excited", "You look upset. If the topic makes you feel this way, your expression shows concern. If not, smile!", "You look surprised! This is good to add more expressions for certain topics.", "Your expressionn is very neutral. Try to express more feelings for the topics at hand."];

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
              return 1;
            }
            return prevIndex + 1;
          })
        };
        setInterval(timer,20000);

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
          <div>
            <h2> Current Emotion: {placeholderText[index]}</h2>
          <Chart/>
          <br></br>
          <h3> Suggested Improvements:</h3>
          <p style = {{margin: '20px'}}> {suggestions[index]}</p>
          </div>
        </div>
      </div>

    );
  }


export default Video
