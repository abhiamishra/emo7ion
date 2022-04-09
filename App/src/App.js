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
      <Routes>
        <Route exact path="/emo7ion" element={<Welcome />} />
        <Route path="/video" element={<Video />} />
      </Routes>
  </div>
  );
}

export default App;
