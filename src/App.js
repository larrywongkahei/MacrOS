import './App.css';
import MainContainer from './containers/MainContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BackgroundImage from './images/chart.png'

function App() {
  return (
    <div className='App'>
      <img src={BackgroundImage}
              style={{
                height: "100%",
                width: "100%",
                top: "0",
                right: "0",
                padding: "none",
                position: "fixed",
                zIndex: "-1",
                objectFit: "cover",
              }}/>
      <Router>
        <MainContainer/>
      </Router>
    </div>
  )
}

export default App;
