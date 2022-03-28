import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_Details from "../../API_Details";
import Header from "../Movies/Header/Header";
import ActorCards from "./ActorCards/ActorCards";
import { Container } from "../../commonStyles/Container.styled";
import Grid from "../../commonStyles/Grid/Grid";
import Carousel from "../Home/Carousel/Carousel";

export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, []);

  useEffect(() => {
    fetchSimilarMovies();
  }, [movieId]);

  console.log(recommendedMovies);

  const fetchMovie = async () => {
    try {
      const movie = await API_Details.fetchMovie(movieId);
      setMovie(movie);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieCredits = async () => {
    try {
      const movie = await API_Details.fetchMovieCredits(movieId);
      setMovieCredits(movie);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSimilarMovies = async () => {
    const recommendedMovies = await API_Details.fetchSimilarMovies(movieId);
    setRecommendedMovies(recommendedMovies.results);
  };

  return (
    <div>
      {movie && <Header headerMovie={movie} genreList={movie.genres} />}
      <Container>
        <Grid headerTitle="Actors" castList={movieCredits} />
        {recommendedMovies.length !== 0 && (
          <Carousel
            carouselTitle="Recommended Movies"
            movieList={recommendedMovies}
            autoplay={true}
          />
        )}
      </Container>
    </div>
  );
}
