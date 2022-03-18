import React, { useEffect, useState } from "react";
import api_details from "../../API_Details";

// components
import Header from "./Header/Header";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetch(api_details.POPULAR_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {movies.length !== 0 && (
        <>
          {" "}
          <Header headerMovie={movies[0]} />
        </>
      )}
    </>
  );
}
