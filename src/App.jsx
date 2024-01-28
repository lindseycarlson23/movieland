import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
// import Normalize from "react-normalize";
// import React, { Fragment } from "react";

// a4b8a086
// http://www.omdbapi.com/?i=tt3896198&apikey=a4b8a086

const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=a4b8a086";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("showman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
      </div>
      <div className=""></div>{" "}
    </>
  );
};

export default App;
