import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo-rose.png';

export default function Nav() {

  const [changeThme, setChangeThme] = useState(false);
  const [theme, setTheme] = useState({ back: "#3a3a3a", color: "#fff" });

  const [showDrop, setShowDrop] = useState(false)

  React.useEffect(() => {
    changeThme ? setTheme({ back: "#fff", color: "#000" }) :
      setTheme({ back: "#3a3a3a", color: "#fff" });

    document.body.style.backgroundColor = theme.back;
    document.body.style.color = theme.color;

  }, [changeThme]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to="/" exact="true" className="navbar-toggler nav-link color-rose">
        <img className="img-logo" src={Logo} alt="" /> Animos.css
      </Link>

      <button className="navbar-toggler" type="button" 
      onClick={() => setShowDrop(!showDrop)}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" style={{ display : showDrop ? "block" :"none"}}>
        <ul className="navbar-nav mr-auto mx-auto">

          <li className="nav-item">
            <Link to="/" exact="true" className="nav-link color-rose">
              <img className="img-logo" src={Logo} alt="" /> Animos.css
            </Link>
          </li>

          <li className="nav-item">
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
