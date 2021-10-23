import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 style={{marginLeft:"20px"}}>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`${isLargeRow?'row__posterLarger':'row__poster'}`}
            src={`${base_url}${isLargeRow?movie.poster_path:movie.poster_path}`}
            alt="movie.name"
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
