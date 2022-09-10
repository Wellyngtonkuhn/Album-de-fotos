import { useState, useEffect } from "react";

import "./LastedPicture.css";

const API_KEY = "563492ad6f9170000100000153777882b0ff4d05b1a7609fdcfeb3f9";

export default function LastedPicture() {
  const [fotoList, setFotoList] = useState({});

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setFotoList(response);
      });
  }, []);

  return (
    <section id="home">
      <div id="fotosSection" className="fotosSection">
        {fotoList.photos &&
          fotoList.photos.map((foto) => (
            <div key={foto.id} className="fotosRowItem">
              <img src={foto.src.medium} />
            </div>
          ))}
      </div>
    </section>
  );
}
