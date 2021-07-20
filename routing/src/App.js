import './App.css';
import React from 'react'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  return (
    <Router>

      <div className="App">
        
        <Nav />
        
        <Switch>
          <Route path = '/' component={Home} exact/>
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          <Route path='?' component={NotFound} />
        
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
