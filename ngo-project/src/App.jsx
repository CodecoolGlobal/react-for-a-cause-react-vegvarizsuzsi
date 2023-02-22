import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Donations from './components/Donations';
import './App.css'

function App() {
  return (
  <>
      <Router>
        <Navbar />
        <Switch>
        
        <Route path='/' exact component={Home} />
         <Donations />
        </Switch>
      </Router>
    </>
  );       
}

export default App;
