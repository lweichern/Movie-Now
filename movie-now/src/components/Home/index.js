import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero/Hero";
import Carousel from "../Home/Carousel/Carousel";
import api_details from "../../API_Details";

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
    fetchTrendingMovie();
  }, []);
  console.log(movies);

  const fetchMovie = () => {
    fetch(api_details.POPULAR_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  const fetchTrendingMovie = () => {
    fetch(api_details.TRENDING_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setTrendingMovies(data.results))
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
          <Carousel movieList={movies} carouselTitle="Featured Today" />
          <Carousel
            movieList={trendingMovies}
            carouselTitle="Trending Movies"
          />
        </>
      )}
    </>
  );
}
