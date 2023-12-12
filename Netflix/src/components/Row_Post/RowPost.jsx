import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "axios";

function RowPost({ title, isSmall, genre }) {
  const [Poster, setPoster] = useState([]);
  const [videoId, setvideoId] = useState("");

  useEffect(() => {
    axiosInstance.get(`discover/` + `${genre}`).then((res) => {
      setPoster(res.data.results);
    });
  }, []);
  const handleMovieClick = (id) => {
    console.log(id);
    axiosInstance
      .get(`movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => setvideoId(res.data.results[0].key));
  };
  const opts = {
    height: "390",
    width: "98.5%",
    playerVars: {
      autoplay: 1,
    },
  };

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
      {videoId && <YouTube videoId={videoId} opts={opts} style={{marginBottom:20}}/>}
    </div>
  );
}

export default RowPost;
