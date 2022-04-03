import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';
import Video from './pages/video';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">
      {/* <Welcome
      logo="./assets/logo.png"
      startNewCall="Start new call"
      play="./assets/play.png"
      viewPastFeedback="View Past Feedback"
      smile= './assets/smile.png'
      sad="./assets/sad.png"
    /> */}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/video" element={<Video />} />
      </Routes>
  </div>
  );
}

export default App;
