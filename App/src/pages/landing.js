import React, {Component} from 'react';
import emotions2 from '../assets/emotions2.png'
import emotions1 from '../assets/emotions1.png'
import logo from '../assets/logo2.png'
import video from '../assets/vid.png'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="container-center-horizontal2">
      <form className="landing-pagescreen" name="form1" action="form1" method="post">
        <div className="overlap-group2">
        <img className="smile4" src={emotions1} />
        <img className="smile3" src={emotions1} />
          <img className="smile2" src={emotions1} />
          <img className="rightSmile" src={emotions1} />
          <div className="frame-2">
          <div className = "plainBox"></div>
          <img className="vid" src={video} />
            <div className="frame-1">
              <div className="flex-row">
                <div className="flex-col inter-bold-black-100px">
                  <div className="lights">
                    Lights,
                  </div>
                  <div className="camera">
                    Camera,
                  </div>
                </div>
                <img className="logo2" src={logo} />
              </div>
            </div>
            <div className="overlap-group-container2">
              <div className="overlap-group">
                <a href="javascript:SubmitForm('form1')">
                  <div className="create-account-box2"></div>
                </a>
                <Link className="sign-in inter-bold-black-40px" style={{ textDecoration: 'none' }} to = "/welcome">
                Guest
                </Link>
              </div>
              <div className="overlap-group-sec">
                <a href="javascript:SubmitForm('form1')">
                  <div className="create-account-box"></div>
                </a>
                <div className="sign-in inter-bold-white-40px">
                  Sign In
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
  export default Landing