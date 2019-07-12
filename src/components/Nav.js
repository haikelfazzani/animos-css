import React from 'react';
import { Link } from "react-router-dom";

export default function Nav({setTheme}) {

  const [changeThme, setChangeThme] = React.useState(false)

  React.useEffect(() => {
    changeThme ? setTheme("App-header-dark") : setTheme("App-header");
  }, [changeThme]);

  return (
    <nav>
      <ul className="nav-link flex-row">
        <li><Link to="/" exact="true">Animations</Link></li>
        <li><Link to="/notifications" className="ml-20">Notifications</Link></li>
        <li><Link to="/about" className="ml-20">About</Link></li>
        <li><Link to="/more" className="ml-20">More</Link></li>

        <li>
          <button className="simple-link ml-20"
            onClick={() => setChangeThme(!changeThme)}><i className="fas fa-quidditch"></i>
          </button>
        </li>

      </ul>
    </nav>
  )
}
