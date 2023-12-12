import React, { useEffect, useState } from "react";
import "./Banner.css";
import axiosInstance from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  const [Movie, setMovie] = useState();
  useEffect(() => {
    axiosInstance
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[10]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: Movie
          ? `url(${imageUrl + Movie.backdrop_path})`
          : null,
      }}
    >
      <div className="content">
        <h1 className="title">{Movie ? Movie.title || Movie.name : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">Mylist</button>
        </div>
        <h1 className="description">{Movie ? Movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
