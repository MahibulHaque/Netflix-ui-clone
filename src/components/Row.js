import React, { useRef } from "react";
import axios from "../axios";
import "../styles/row.css";
import { useQuery } from "react-query";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const myMovies = useRef();
  const { data, isSuccess } = useQuery(["Movies title", title], () =>
    axios.get(fetchUrl).then((response) => response.data?.results)
  );

  if (isSuccess) {
    myMovies.current = data;
    return (
      <div className="row">
        <h2 style={{ marginLeft: "20px" }}>{title}</h2>
        <div className="row__posters">
          {myMovies.current?.map((movie) => (
            <img
              className={`${isLargeRow ? "row__posterLarger" : "row__poster"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.poster_path
              }`}
              alt="movie.name"
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }
  return(
    <div className="row">
      <h2 style={{marginLeft:"20px",marginBottom:"20px"}}>{title}</h2>
      <h1>Loading...</h1>
    </div>
  )
};

export default Row;
