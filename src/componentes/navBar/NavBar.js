import "./NavBar.css";

export default function NavBar({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="logo">
        <a href="#home">ÁLBUM DE CASAMENTO</a>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#fotosSection">Galeria</a>
          </li>
          <li>
            <a href="https://www.pexels.com/pt-br/" target="_blank">
              Api Pexels
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
