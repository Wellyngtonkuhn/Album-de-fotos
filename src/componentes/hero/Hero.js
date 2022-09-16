import { useState, useEffect } from "react";

import "./Hero.css";

import Loading from "../assets/loading.svg";

export default function Hero() {
  const [destaque, setDestaque] = useState([]);

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // Gerando um item alatório para o componente Destaque
        let randomDestaque = Math.floor(
          Math.random() * (response?.photos?.length - 1)
        );
        let aletorio = response.photos[randomDestaque];
        setDestaque(aletorio);
      });
  }, []);

  return (
    <>
      {!destaque ? (
        <div className="loading">
          <img src={Loading} alt="Loading" />
        </div>
      ) : (
        <section
          className="destaque"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${destaque?.src?.large2x})`,
          }}
        >
          <div className="destaqueVertical">
            <div className="destaqueHorizontal">
              <div className="destaqueNome">
                <p id="topo">photographer</p>
                <h3>{destaque.photographer}</h3>
              </div>
              <div className="destaqueBotao">
                <a
                  href={destaque.photographer_url}
                  alt={destaque.photographer_url}
                  target="_blank"
                >
                  Visitar Perfil no Pexels
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
