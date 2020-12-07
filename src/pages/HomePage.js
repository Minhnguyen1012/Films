import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Carousels from "../components/Carousels";
import PaginationBar from "../components/PaginationBar";
import api from "../apiService";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

const apikey = process.env.REACT_APP_APIKEY;

const HomePage = () => {
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let url = `movie/popular?api_key=${apikey}&language=en-US&page=${pageNum}`;
  //       if (query) url += `&query=${query}`;
  //       const res = await api.get(url);
  //       setMovieList(res.data.results);
  //       setTotalPageNum(res.data.total_pages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [pageNum, query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (query) {
          console.log("search");
          url = `search/movie?api_key=${apikey}&language=en-US&page=${pageNum}&query=${query}`;
        } else {
          url = `movie/popular?api_key=${apikey}&language=en-US&page=${pageNum}`;
        }
        setLoading(true);
        const res = await api.get(url);
        setMovieList(res.data.results);
        setTotalPageNum(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [pageNum, query]);

  return (
    <div>
      {!loading ? (
        <>
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
        </>
      ) : (
        <div>haha</div>
      )}
    </div>
  );
};

export default HomePage;
