import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Donations from './components/Donations';
import './App.css'

function App() {
  return (
  <>
      <Router>
        <Navbar />
        <Home />
         <Donations />
      </Router>
    </>
  );       
}

export default App;
