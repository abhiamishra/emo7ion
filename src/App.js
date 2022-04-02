import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Router,
  Link,
  Switch
} from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';
import Video from './pages/video';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">
      {/* < Landing /> */}
    {/* <Router>
            <Routes>
            <Route exact path='/' element={< Landing />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/welcome' element={< Welcome />}></Route>
            <Route exact path='/vodeo' element={< Video />}></Route>
    </Routes>
  </Router> */}
      <Welcome
      logo="./assets/logo.png"
      startNewCall="Start new call"
      play="./assets/play.png"
      viewPastFeedback="View Past Feedback"
      smile= './assets/smile.png'
      sad="./assets/sad.png"
    />
  </div>
  );
}

export default App;
