import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../apiService";
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";
import PublicNavbar from "../components/PublicNavbar";

const FilmsDetail = () => {
  const apikey = process.env.REACT_APP_APIKEY;
  const IMAGES_API = process.env.REACT_APP_IMAGE_URL;

  const [movieList, setMovieList] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log(params.id);
  const movies = params.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/movie/${movies}?api_key=${apikey}`);
        console.log(res);
        setMovieList(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(movies);
  }, [params]);

  return loading ? (
    <>
      <p>Loading</p>
    </>
  ) : (
    <>
      <NewNav />

      <Container>
        <Row className="detailTop">
          <Col md={3}>
            {movies && (
              <img src={`${IMAGES_API}${movies.poster_path}`} alt="card img" />
            )}
          </Col>
          <Col md={9} style={{ color: "white" }}>
            <div>
              <h2>{movies?.title}Title</h2>
            </div>
            <div>
              <strong>Year:</strong> {movies?.backdrop_path}
            </div>
            <div>
              <strong>Country:</strong> {movies?.country}
            </div>
            <div>
              <strong>Pages:</strong> {movies?.pages}
            </div>
            <div>
              <strong>Language:</strong> {movies?.original_language}
            </div>
            <div>
              <strong>Overview:</strong> {movies?.overview}
            </div>
            <div>
              <strong>Vote Average:</strong> {movies?.vote_average}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FilmsDetail;
