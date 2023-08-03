import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./css/App.css";
import AddMovie from "./components/AddMovie";

const URL = "https://react-http-f3119-default-rtdb.firebaseio.com";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchingMoviesHandler = useCallback(async () => {
    setIsLoaded(true);
    setError(null);
    try {
      const res = await fetch(`${URL}/movies.json`);
      if (!res.ok) throw new Error("Something went Wrong!");
      const data = await res.json();

      const fetchingMovie = [];

      for (const key in data) {
        fetchingMovie.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      setMovies(fetchingMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoaded(false);
  }, []);

  useEffect(() => {
    fetchingMoviesHandler();
  }, [fetchingMoviesHandler]);

  const content = () => {
    if (!isLoaded && movies.length > 0) return <MoviesList movies={movies} />;
    else if (!isLoaded && movies.length === 0 && !error)
      return <p>No Movie Found</p>;
    else if (!isLoaded && error) return <p>{error}</p>;
    else if (isLoaded) return <p>Loading...</p>;
  };

  const addMovieHandler = async (movie) => {
    const res = await fetch(`${URL}/movies.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    console.log(data);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchingMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content()}</section>
    </React.Fragment>
  );
}

export default App;
