import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({ black }) {
  return (
    <header className={black ? "black" : "gray"}>
      <div className="logo">
        <a href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" alt="Pexels_Logo"/>
        </a>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <Link to="/">Fotos</Link>
          </li>

          <li>
            <Link to="videos">Videos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
