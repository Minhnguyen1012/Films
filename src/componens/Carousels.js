import React from "react";
import { Carousel } from "react-bootstrap";

const Carousels = ({ movies }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <Carousel className="corona">
        <Carousel.Item className="Covid19">
          <img
            className="w-100"
            src={
              `https://image.tmdb.org/t/p/w1280/` + movies?.[13].backdrop_path
            }
            alt="First slide"
          />
          <Carousel.Caption
            className="text-left "
            style={{ backgroundColor: "none" }}
          >
            <h1 style={{ fontSize: "50px" }}>{movies?.[13].title}</h1>
            <p style={{ fontSize: "20px" }}>{movies?.[13].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              `https://image.tmdb.org/t/p/w1280/` + movies?.[16].backdrop_path
            }
            alt="Third slide"
          />

          <Carousel.Caption className="text-left ml-5">
            <h1 style={{ fontSize: "50px" }}>{movies?.[16].title}</h1>

            <p style={{ fontSize: "20px" }}>{movies?.[16].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              `https://image.tmdb.org/t/p/w1280/` + movies?.[8].backdrop_path
            }
            alt="Third slide"
          />

          <Carousel.Caption className="text-left ml-5">
            <h1 style={{ fontSize: "50px" }}>{movies?.[8].title}</h1>
            <p style={{ fontSize: "20px" }}>{movies?.[8].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
