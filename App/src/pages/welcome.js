import React from 'react';

import logo from '../assets/logo.png'
import play from '../assets/play.png'
import smile from '../assets/smile.png'
import sad from '../assets/sad.png'
import { Link } from "react-router-dom";
import '../App.css';

document.body.style = "background: #707EFF;";

function Welcome() {

    return (
      <div className="container-center-horizontal" style = {{backgroundColor: '707EFF'}}>
        <form className="welcome-pagescreen" name="form2" action="form2" method="post">
          <img className="logo" alt = "logo" src={logo} />
          <div className="overlap-group-container">
            <div className="overlap-group1">
              <div className="rectangle-1" ></div>
                <a href={process.env.PUBLIC_URL + "/open_faces.html"} > Start New Call</a>
              <img className="clipart2739949-1" alt = "play button" src={play} />
            </div>
            <div className="overlap-group">
              <div className="rectangle-2"></div>
              <div className="inter-normal-white-30px">
                View Past Feedback
              </div>
              <img className="clipart14746-1" alt = "smile" src={smile} />
              <img className="clipart644289-1" alt = "sad" src={sad} />
            </div>
          </div>
        </form>
      </div>
    );
  }

  export default Welcome
