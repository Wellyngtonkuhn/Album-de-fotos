import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./componentes/navBar/NavBar";
import Footer from "./componentes/footer/Footer";
import RoutesApp from "./routes/RoutesApp";


export default function App() {
  const [blackHeader, setBlackheader] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 50) {
        setBlackheader(true);
      } else {
        setBlackheader(false);
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <section className="page">
      <BrowserRouter>
      <NavBar black={blackHeader} />
          <RoutesApp />
      </BrowserRouter>
      <Footer />
    </section>
  );
}
