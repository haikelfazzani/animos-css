import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import About from './pages/About';
import More from './pages/More';
import Animations from './pages/Animations';
import Notifications from './pages/Notifications';
import Footer from './partials/Footer';
import Nav from './partials/Nav';

function App() {

  return (
    <Router>

      <Nav />

      <div className="container mt-5 mb-5">

        <main role="main" className="inner cover">
          <Route exact path="/" component={Animations} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/about" component={About} />
          <Route exact path="/more" component={More} />
          <Route render={() => <Redirect to="/" />} />
        </main>
        
      </div>

      <Footer />
    </Router>
  );
}

export default App;
