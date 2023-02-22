import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import './App.css';
import Donations from './components/Donations';
import './App.css'

function App() {
  return (
  <>
      <Router>
        <Navbar />
        <Home />
        <AboutUs />
         <Donations />
      </Router>

    </>
  );      
}

export default App;
