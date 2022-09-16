import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LastedPicture.css";
import Loading from "../assets/loading.svg";
import {  faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const REACT_APP_BASE_URL_PHOTO = "https://api.pexels.com/v1/";

const REACT_APP_BASE_URL_VIDEO = "https://api.pexels.com/videos/";

export default function ContentDataApiQuery({ type, query }) {
  const [data, setdata] = useState({});

  useEffect(() => {
    let url;
    if (type === "photos") {
      url = REACT_APP_BASE_URL_PHOTO;
    } else if (type === "videos") {
      url = REACT_APP_BASE_URL_VIDEO;
    }
    fetch(`${url}${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setdata(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="home">
      <div id="fotosSection" className="fotosSection">
        {type === "photos"
          ? data.photos &&
            data.photos.map((item) => (
              <div key={item.id} className="fotosRowItem">
                <Link to={`photos/${item.id}`}>
                <FontAwesomeIcon
                    className="detalhesPhoto"
                    icon={faInfo}
                    size={"5x"}
                    title={'Ver mais!'}
                  />  
                  <h1 className="detalhesPhoto-h1">Ver mais</h1>
                  
                  <img
                    src={item.src.medium ? item.src.medium : Loading}
                    alt={item.id}
                  />
                </Link>
              </div>
            ))
          : data.videos &&
            data.videos.map((item) => (
              <div key={item.id} className="fotosRowItem">
                <Link to={`videos/${item.id}`}>
                  <FontAwesomeIcon
                    className="itemIconPlay"
                    icon={faPlayCircle}
                    size={"5x"}
                  />
                  <img src={item.image ? item.image : Loading} alt={item.id} />
                </Link>
              </div>
            ))}
      </div>
    </section>
  );
}
