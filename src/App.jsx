import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";

const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=a4b8a086";

const movie1 = {
  "Title": "The Greatest Showman",
  "Year": "2017",
  "imdbID": "tt1485796",
  "Type": "movie",
  "Poster":
    "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("showman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
      </div>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="showman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>


      {movies.length > 0
      ? (
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
      ) :
      (
        <div className="empty">
        <h2>No movies found</h2>
        </div>
      )
    }
    </>
  );
};

export default App;
