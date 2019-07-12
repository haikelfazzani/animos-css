import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo-rose.png';

export default function Nav() {

  const [changeThme, setChangeThme] = useState(false);
  const [theme, setTheme] = useState({ back: "#282c34", color: "#fff" });

  React.useEffect(() => {
    changeThme ? setTheme({ back: "#fff", color: "#000" }) :
      setTheme({ back: "#282c34", color: "#fff" });

    document.body.style.backgroundColor = theme.back;
    document.body.style.color = theme.color;

  }, [changeThme]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">

        <li className="nav-item active">
        <Link to="/" exact="true" className="nav-link color-rose mx-auto">
        <img className="img-logo" src={Logo} alt="" /> Animos.css
      </Link>
          </li>

          <li className="nav-item active">
            <Link to="/" exact="true" className="nav-link">Animations</Link>
          </li>

          <li className="nav-item">
            <Link to="/notifications" className="nav-link">Notifications</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>

          <li className="nav-item">
            <Link to="/more" className="nav-link">More</Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link"
              onClick={() => setChangeThme(!changeThme)}><i className="fas fa-fill-drip"></i>
            </Link>
          </li>

        </ul>

      </div>
    </nav>)
}
