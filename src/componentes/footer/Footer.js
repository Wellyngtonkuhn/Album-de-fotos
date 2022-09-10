import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>Criado por Wellyngton Kuhn</p>
      <p>
        Api{" "}
        <a href="https://www.pexels.com/pt-br/" target="_blank">
          Pexels
        </a>
      </p>

      <ul>
        <li>
          <a
            href="https://www.instagram.com/wellyngtonkuhn/?hl=pt-br"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wellyngton-kuhn-b56344223/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Wellyngtonkuhn" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
