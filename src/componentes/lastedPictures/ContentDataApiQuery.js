import { useState, useEffect } from "react";

import "./LastedPicture.css";

const API_KEY = "563492ad6f9170000100000153777882b0ff4d05b1a7609fdcfeb3f9";
const REACT_APP_BASE_URL_PHOTO = "https://api.pexels.com/v1/";
const REACT_APP_BASE_URL_VIDEO = "https://api.pexels.com/videos/";

export default function ContentDataApiQuery({ type, query }) {
  const [data, setdata] = useState({});
  console.log(data);

  useEffect(() => {
    fetch(
      `${
        type === "photos" ? REACT_APP_BASE_URL_PHOTO : REACT_APP_BASE_URL_VIDEO
      }${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
      }
    )
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
                <img src={item.src.medium} />
              </div>
            ))
          : data.videos &&
            data.videos.map((item) => (
              <div key={item.id} className="fotosRowItem">
                <img src={item.image} />
              </div>
            ))}
      </div>
    </section>
  );
}
