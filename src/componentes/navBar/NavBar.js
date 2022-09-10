import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="logo">
        <Link to="/">Últimas Fotos</Link>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <Link to="/">Fotos</Link>
          </li>

          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
