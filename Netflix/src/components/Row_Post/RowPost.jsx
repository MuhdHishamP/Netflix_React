import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import "./RowPost.css";

function RowPost({ title, isSmall, genre }) {
  const [Poster, setPoster] = useState([]);
  useEffect(() => {
    axiosInstance.get(`discover/` + `${genre}`).then((res) => {
      setPoster(res.data.results);
    });
  }, []);
  const handleMovieClick = (id) => {console.log(id)};

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="posters">
        {Poster.map((obj) => (
          <img
            className={isSmall ? "small_poster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            onClick={() => handleMovieClick(obj.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
