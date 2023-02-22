import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <AboutUs />
      </Router>

    </>
  );

}

export default App;
