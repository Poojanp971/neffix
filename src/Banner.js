import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    'https://image.tmdb.org/t/p/original${movie?.backdrop_path}'
                    
                )`,
        //enter the tmdb poster link in url above
        width: "100%",
        backgroundPosition: "center center",
      }}
    >
      {/* background*/}
      <div className="banner__contents">
        {/*title*/}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/*description*/}
        <h1 className="banner__description">{movie?.overview}</h1>
        {/*console.log(movie?.overview);*/}
      </div>
    </header>
  );
}

export default Banner;
