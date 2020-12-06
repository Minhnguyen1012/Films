import React, { useEffect, useState } from "react";
import Cards from "../componens/Cards";
import Carousels from "../componens/Carousels";
import PaginationBar from "../componens/PaginationBar";
import api from "../apiService";
import PublicNavbar from "../componens/PublicNavbar";
import Footer from "../componens/Footer";

const apikey = process.env.REACT_APP_APIKEY;

const TopRatedPage = () => {
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
    const fetchData = async () => {
      try {
        let url = `movie/top_rated?api_key=${apikey}&language=en-US&page=${pageNum}`;
        if (query) url += `&query=${query}`;
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

export default TopRatedPage;
