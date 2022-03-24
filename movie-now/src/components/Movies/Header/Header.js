import React, { useEffect, useState } from "react";
import api_details from "../../../API_Details";
import {
  BackgroundHeaderImage,
  BlurredOverlay,
  MovieCard,
  MovieCardImage,
  Title,
  Content,
  Synopsis,
  MovieDetails,
  Ratings,
  Director,
  RunTime,
  Revenue,
  Budget,
  MovieGenreContainer,
  MovieGenre,
} from "./Header.styled";
import calculations from "../../../Calculations";
import { Link } from "react-router-dom";

export default function Header({ headerMovie, genreList }) {
  const [movie, setMovie] = useState();
  const [directors, setDirectors] = useState([]);

  console.log(genreList);

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, [headerMovie]);

  const fetchMovie = async () => {
    try {
      const movie = await api_details.fetchMovie(headerMovie.id);

      setMovie(movie);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieCredits = async () => {
    try {
      const credits = await api_details.fetchMovieCredits(headerMovie.id);

      const director = credits.crew.filter(
        (member) => member.job === "Director"
      );

      setDirectors(director);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenreTitle = (genreId) => {
    let genreName = "";

    genreList.map((item) => {
      if (item.id === genreId) {
        genreName = item.name;
      }
    });

    return genreName;
  };

  return (
    <>
      <BackgroundHeaderImage
        image={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${headerMovie.backdrop_path}`}
      >
        <BlurredOverlay>
          <MovieCard>
            <MovieCardImage
              src={`${api_details.IMAGE_BASE_URL}${api_details.POSTER_SIZE}${headerMovie.poster_path}`}
            />
            <Content>
              <Title>{headerMovie.title}</Title>
              <Synopsis>{headerMovie.overview}</Synopsis>
              <MovieDetails>
                <Ratings className="info-column">
                  <h4>Ratings</h4>
                  <div className="ratings-score">
                    {movie && movie.vote_average}
                  </div>
                </Ratings>
                <Director className="info-column">
                  <h4>Director</h4>
                  {directors.length !== 0 &&
                    directors.map((director) => {
                      return <p key={director.name}>{director.name}</p>;
                    })}
                </Director>
                <RunTime className="info-column">
                  <h4>Run Time</h4>
                  <p>{movie && calculations.convertTime(movie.runtime)}</p>
                </RunTime>
                <Budget className="info-column">
                  <h4>Budget</h4>
                  <p>{movie && calculations.convertMoney(movie.budget)}</p>
                </Budget>
              </MovieDetails>
              <h4>Genres</h4>
              {genreList && (
                <MovieGenreContainer>
                  {genreList.map((genre) => {
                    return (
                      <Link to={`/movies/genre/${genre.id}`} key={genre.id}>
                        <MovieGenre>{genre.name}</MovieGenre>
                      </Link>
                    );
                  })}
                </MovieGenreContainer>
              )}
            </Content>
          </MovieCard>
        </BlurredOverlay>
      </BackgroundHeaderImage>
    </>
  );
}
