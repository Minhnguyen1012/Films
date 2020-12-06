import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FilmsDetail from "./pages/FilmsDetail";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/phim/:id" component={FilmsDetail} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/now-playing" component={NowPlayingPage} />
          <Route exact path="/top-rated" component={TopRatedPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
