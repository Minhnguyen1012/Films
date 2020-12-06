import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Carousels from "../components/Carousels";
import PaginationBar from "../components/PaginationBar";
import api from "../apiService";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

const apikey = process.env.REACT_APP_APIKEY;

const NowPlayingPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(0);

  const [movieList, setMovieList] = useState(null);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };

  useEffect(() => {
    if (query) return;
    const fetchData = async () => {
      try {
        let url = `movie/now_playing?api_key=${apikey}&language=en-US&page=${pageNum}`;
        // if (query) url += `&query=${query}`;
        const res = await api.get(url);
        setMovieList(res.data.results);
        setTotalPageNum(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageNum, query]);

  useEffect(() => {
    if (!query) return;
    console.log("Searching");
    const fetchData = async () => {
      try {
        let url = `search/movie?api_key=${apikey}&language=en-US&page=${pageNum}&query=${query}`;
        const res = await api.get(url);
        setMovieList(res.data.results);
        setTotalPageNum(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageNum, query]);

  return (
    <div>
      <PublicNavbar
        loading={loading}
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
      />

      <Carousels movies={movieList} />
      <Cards movies={movieList} />

      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
      />
      <Footer />
    </div>
  );
};

export default NowPlayingPage;
