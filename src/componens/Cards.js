import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Cards = ({ movies }) => {
  const history = useHistory();
  const handleClickPhim = (phimId) => {
    history.push(`/phim/${phimId}`);
  };

  return (
    <div className="wrapper" hover>
      {movies &&
        movies.map((film) => (
          <div
            className="card mt-4 ml-4"
            overlay="red-strong"
            style={{ width: "13rem", border: "none" }}
            onClick={() => handleClickPhim(film.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
              alt="card img"
            />
            <div className="info">
              <h3>{film?.title}</h3>
              <p>
                {film?.overview?.length < 90
                  ? film.overview
                  : film.overview.slice(0, 75) + "..."}
              </p>
              <button> Read More</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
