import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../assets/loading.svg";

import "./SingleFotos.css";

export default function SingleFoto() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="container">
        {user.length === 0 ? (
          <div className="loading">
            <img src={Loading} alt="Loading" />
          </div>
        ) : (
          <>
            <div className="imgContent">
              <img src={user?.src?.original} alt={user?.photographer} />
            </div>
            <div className="infoContent">
              <p>id: {user.id}</p>
              <h3>Photographer: {user.photographer}</h3>
              <a href={user.photographer_url}>Ver mais</a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
