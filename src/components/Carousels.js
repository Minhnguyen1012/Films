import React from "react";
import { Carousel } from "react-bootstrap";

const Carousels = ({ movies }) => {
  let array = [13, 16, 8];
  return (
    <div style={{ marginTop: "15px" }}>
      <Carousel className="corona">
        {movies &&
          movies.map((e, idx) => {
            return (
              array.indexOf(idx) > -1 && (
                <Carousel.Item className="Covid19">
                  <img
                    className="w-100"
                    src={
                      `https://image.tmdb.org/t/p/w1280/` +
                      movies?.[idx].backdrop_path
                    }
                    alt="First slide"
                  />
                  <Carousel.Caption
                    className="text-left "
                    style={{ backgroundColor: "none" }}
                  >
                    <h1 style={{ fontSize: "50px" }}>{movies?.[idx].title}</h1>
                    <p style={{ fontSize: "20px" }}>{movies?.[idx].overview}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            );
          })}

        {/* <Carousel.Item>
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
        <Carousel.Item> */}
        {/* <img
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
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Carousels;
