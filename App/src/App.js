import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';
import Video from './pages/video';
import Welcome from './pages/welcome';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <script async src="video_files/opencv.js" onload="openCvReady();"></script>
        <script src="video_files/utils.js"></script>
      </Helmet>
      <Routes>
        <Route exact path="/emo7ion" element={<Landing />} />
        <Route path="/video" element={<Video />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route exact path="/open_faces" render={() => {window.location.href="terminos.html"}} />
      </Routes>
  </div>
  );
}

export default App;
