import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./comp/MovieCard";
function App() {
  var api_key = "ce76d9baddad8e9543c7b6f33225a019";
  const [movieList, setMovieList] = useState([]);
  const getMovieList = (key) => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ce76d9baddad8e9543c7b6f33225a019&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) =>
        setMovieList((prev) => {
          console.log(data.results);
          return data.results;
        })
      );
  };
  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className="App">
      <h3> New Movies Out!</h3>
      <div id="ml">
        {movieList.map((item) => (
          <MovieCard
            key={item.id}
            tt={item.original_title}
            time={item.release_date}
            url={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
