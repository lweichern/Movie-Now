import React, { useEffect, useState } from "react";
import Movie from "../../components/Movies/Movie";
import Hero from "../Home/Hero/Hero";
import Carousel from "../Home/Carousel/Carousel";
import api_details from "../../API_Details";

export default function Index() {
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
    <>
      {movies.length !== 0 && (
        <>
          <Hero
            image1={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${movies[0].backdrop_path}`}
            image2={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${movies[1].backdrop_path}`}
            image3={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${movies[2].backdrop_path}`}
          />
          <Carousel movieList={movies} />
          <Movie />
        </>
      )}
    </>
  );
}
