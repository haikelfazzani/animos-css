import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import About from './pages/About';
import More from './pages/More';
import Animations from './pages/Animations';
import Notifications from './pages/Notifications';
import Footer from './partials/Footer';
import Nav from './partials/Nav';

function App() {

  const [theme, setTheme] = React.useState("App-header");

  return (
    <Router>
      <div className="App">

        <Nav setTheme={setTheme} />

        <header className={theme}>          
          <Route exact path="/" component={Animations} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/about" component={About} />
          <Route exact path="/more" component={More} />
          <Route render={() => <Redirect to="/" />} />
        </header>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
