import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import About from './pages/About';
import More from './pages/More';
import SnackBar from './pages/SnackBar';
import Animations from './pages/Animations';

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

          <div className="nav-link mb-20">
            <Link to="/" exact="true">Animations</Link>
            <Link to="/snack" className="ml-20">SnackBar</Link>
            <Link to="/about" className="ml-20">About</Link>
            <Link to="/more" className="ml-20">More</Link>
            <button className="simple-link ml-10"
              onClick={() => setChangeThme(!changeThme)}>
              <i className="fas fa-quidditch"></i>
            </button>
          </div>

          
          <Route exact path="/" component={Animations} />
          <Route exact path="/snack" component={SnackBar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/more" component={More} />
          <Route render={() => <Redirect to="/" />} />

        </header>
      </div>
    </Router>
  );
}

export default App;
