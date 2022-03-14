import React, { useEffect, useState } from "react";
import api_details from "../../API_Details";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(movies);

  const fetchMovie = () => {
    fetch(api_details.POPULAR_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
}
