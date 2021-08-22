import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);
  
// Truncate String to a certain number
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    // background will be the poster of movie
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        background: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/* title */}
        {/* using optional chaining doesn't throw error but undefined */}
        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.originalName}</h1>
        {/* div >> 2 button */}
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'> My List </button>
        </div>
        {/* description */}
        <div className='banner__description'>
            {truncate(movie?.overview, 200)}
        </div>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
