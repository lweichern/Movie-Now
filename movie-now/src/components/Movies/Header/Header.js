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
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@mui/material";

export default function Header({ headerMovie, genreList }) {
  const [movie, setMovie] = useState();
  const [directors, setDirectors] = useState([]);
  const [headerTab, setHeaderTab] = useState("Movie Details");
  const [movieTrailerKey, setMovieTrailerKey] = useState();
  const [headerImageOrientation, setHeaderImageOrientation] =
    useState("portrait");

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, [headerMovie]);

  useEffect(() => {
    fetchMovieTrailer();
  }, [movie]);

  const ChildVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setHeaderImageOrientation("landscape");
    } else {
      setHeaderImageOrientation("portrait");
    }
    console.log(window.innerWidth);
  });

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
                  ? headerImageOrientation === "landscape"
                    ? `${api_details.IMAGE_BASE_URL}${api_details.POSTER_SIZE}${headerMovie.poster_path}`
                    : `${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${headerMovie.backdrop_path}`
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
              <AnimatePresence>
                {headerTab === "Movie Details" ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Title>{headerMovie.title}</Title>
                    <Synopsis>{headerMovie.overview}</Synopsis>
                    <MovieDetails>
                      <Ratings
                        className="info-column"
                        variants={ChildVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                      >
                        <h4>Ratings</h4>
                        <div className="ratings-score">
                          {movie && movie.vote_average}
                        </div>
                      </Ratings>
                      <Director
                        className="info-column"
                        variants={ChildVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.35 }}
                      >
                        <h4>Director</h4>
                        {directors.length !== 0 &&
                          directors.map((director) => {
                            return <p key={director.name}>{director.name}</p>;
                          })}
                      </Director>
                      <RunTime
                        className="info-column"
                        variants={ChildVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                      >
                        <h4>Run Time</h4>
                        <p>
                          {movie && calculations.convertTime(movie.runtime)}
                        </p>
                      </RunTime>
                      <Budget
                        className="info-column"
                        variants={ChildVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                      >
                        <h4>Budget</h4>
                        <p>
                          {movie && calculations.convertMoney(movie.budget)}
                        </p>
                      </Budget>
                    </MovieDetails>
                  </motion.div>
                ) : (
                  <Trailer
                    width="100%"
                    height="70%"
                    src={`https://www.youtube.com/embed/${movieTrailerKey}?autoplay=1&mute=1`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, x: 20 }}
                  ></Trailer>
                )}
              </AnimatePresence>
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
