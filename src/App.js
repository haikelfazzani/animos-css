import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import About from './pages/About';
import Animations from './pages/Animations';
import Notifications from './pages/Notifications';
import Footer from './partials/Footer';
import Nav from './partials/Nav';
import Buttons from './pages/Buttons';

function App() {

  return (
    <Router>

      <Nav />

      <div className="container mt-5 mb-5">

        <section className="jumbotron text-center">
          <div className="container">
            <Route exact path="/" component={Animations} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/buttons" component={Buttons} />
            <Route exact path="/about" component={About} />            
            <Route render={() => <Redirect to="/" />} />
          </div>
        </section>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
