import './App.css';
import MainContainer from './containers/MainContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SVGComponent from './components/SvgComponent';
function App() {
  return (
    <div className='App'>
      <SVGComponent />
      <Router>
        <MainContainer/>
      </Router>
    </div>
  )
}

export default App;
