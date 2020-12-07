import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../apiService";
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";
import PublicNavbar from "../components/PublicNavbar";
import ReactPlayer from "react-player";

const FilmsDetail = () => {
  const apikey = process.env.REACT_APP_APIKEY;
  const IMAGES_API = process.env.REACT_APP_IMAGE_URL;
  const [videoInfo, setVideoInfo] = useState(null);
  const [movieList, setMovieList] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log(params.id);
  const movies = params.id;

  useEffect(() => {
    if (movies) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await api.get(`/movie/${movies}?api_key=${apikey}`);
          console.log(res);
          setMovieList(res.data);
          console.log(res.data);
          const videoResult = await api.get(
            `/movie/${params.id}/videos?api_key=${apikey}`
          );
          console.log("videos", videoResult.data.results);
          setVideoInfo(videoResult.data.results[0]);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }
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
          <Col md={5}>
            {movieList && (
              <img
                src={`${IMAGES_API}${movieList.poster_path}`}
                alt="card img"
              />
            )}
          </Col>
          <Col md={7} style={{ color: "white" }}>
            <div>
              <h2>{movieList?.title}Title</h2>
            </div>
            <div>
              <strong>Year:</strong> {movieList?.release_date}
            </div>

            <div>
              <strong>Language:</strong> {movieList?.original_language}
            </div>
            <div>
              <strong>Overview:</strong> {movieList?.overview}
            </div>
            <div>
              <strong>Vote Average:</strong> {movieList?.vote_average}
            </div>
            <ReactPlayer
              className="react-player mt-3"
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
              }}
              url={`https://www.youtube.com/watch?v=${videoInfo?.key}`}
              width="600px"
              height="300px"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FilmsDetail;
