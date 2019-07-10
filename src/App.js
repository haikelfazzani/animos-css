import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <div className="nav-link mb-20">
            <Link to="/" exact="true">Home</Link>
            <Link to="/about" className="ml-20">About</Link>
            <Link to="/contact" className="ml-20">Contact</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

        </header>
      </div>
    </Router>
  );
}

export default App;
