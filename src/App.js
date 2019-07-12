import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import About from './pages/About';
import More from './pages/More';
import Animations from './pages/Animations';
import Notifications from './pages/Notifications';
import Footer from './components/Footer';

function App() {

  const [changeThme, setChangeThme] = React.useState(false)
  const [theme, setTheme] = React.useState("App-header");

  React.useEffect(() => {
    changeThme ? setTheme("App-header-dark") : setTheme("App-header");
  }, [changeThme])

  return (
    <Router>
      <div className="App">
        <header className={theme}>

          <ul className="nav-link flex-row mb-20">
            <li><Link to="/" exact="true">Animations</Link></li>
            <li><Link to="/notifications" className="ml-20">Notifications</Link></li>
            <li><Link to="/about" className="ml-20">About</Link></li>
            <li><Link to="/more" className="ml-20">More</Link></li>
            <li><button className="simple-link ml-10"
              onClick={() => setChangeThme(!changeThme)}>
              <i className="fas fa-quidditch"></i>
            </button>
            </li>
          </ul>


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
