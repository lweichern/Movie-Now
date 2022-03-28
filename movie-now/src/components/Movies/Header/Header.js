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
  Tabs,
  TabsContentMovieDetails,
  TabsContentTrailer,
  Trailer,
} from "./Header.styled";
import calculations from "../../../Calculations";
import { Link } from "react-router-dom";
import NoImage from "../../../images/no_image.jpg";

export default function Header({ headerMovie, genreList }) {
  const [movie, setMovie] = useState();
  const [directors, setDirectors] = useState([]);
  const [headerTab, setHeaderTab] = useState("Movie Details");
  const [movieTrailerKey, setMovieTrailerKey] = useState();

  console.log(headerTab);
  console.log(genreList);

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, [headerMovie]);

  useEffect(() => {
    fetchMovieTrailer();
  }, [movie]);

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

  const changeTab = (event) => {
    const currentTab = event.currentTarget.textContent;
    setHeaderTab(currentTab);
  };

  const fetchMovieTrailer = async () => {
    try {
      const trailerAPI = await api_details.fetchMovieTrailer(movie.id);
      const trailerResults = trailerAPI.results;
      console.log(trailerResults);
      const trailer =
        trailerResults.length > 1
          ? trailerResults.find((item) =>
              item.name.includes("Official Trailer")
            )
          : trailerResults[0];

      setMovieTrailerKey(trailer.key);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackgroundHeaderImage
        image={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${headerMovie.backdrop_path}`}
      >
        <BlurredOverlay>
          <MovieCard>
            <MovieCardImage
              src={
                headerMovie.poster_path !== null
                  ? `${api_details.IMAGE_BASE_URL}${api_details.POSTER_SIZE}${headerMovie.poster_path}`
                  : NoImage
              }
            />
            <Content genreList={genreList}>
              <Tabs genreList={genreList}>
                <TabsContentMovieDetails
                  onClick={changeTab}
                  currentTab={headerTab}
                >
                  Movie Details
                </TabsContentMovieDetails>
                <TabsContentTrailer onClick={changeTab} currentTab={headerTab}>
                  Trailer
                </TabsContentTrailer>
              </Tabs>
              {headerTab === "Movie Details" ? (
                <div>
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
                </div>
              ) : (
                <Trailer
                  width="100%"
                  height="70%"
                  src={`https://www.youtube.com/embed/${movieTrailerKey}?autoplay=1&mute=1`}
                ></Trailer>
              )}
              {genreList && (
                <div>
                  <h4>Genres</h4>
                  <MovieGenreContainer>
                    {genreList.map((genre) => {
                      return (
                        <Link to={`/movies/genre/${genre.id}`} key={genre.id}>
                          <MovieGenre>{genre.name}</MovieGenre>
                        </Link>
                      );
                    })}
                  </MovieGenreContainer>
                </div>
              )}
            </Content>
          </MovieCard>
        </BlurredOverlay>
      </BackgroundHeaderImage>
    </>
  );
}
