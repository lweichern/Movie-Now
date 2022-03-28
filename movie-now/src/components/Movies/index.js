import React, { useEffect, useState } from "react";
import api_details from "../../API_Details";
import { Container } from "../../commonStyles/Container.styled";
import { Flex } from "../../commonStyles/Flex.styled";
import Carousel from "../Home/Carousel/Carousel";
import CardGenre from "./CardGenre/CardGenre";
import { useTheme } from "styled-components";

// components
import Header from "./Header/Header";
import Grid from "../../commonStyles/Grid/Grid";
import Spinner from "../../commonStyles/Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [carouselMovieList, setCarouselMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [spinner, setSpinner] = useState(false);

  const theme = useTheme();

  console.log(searchTerm === "");

  useEffect(() => {
    fetchMovie();
    fetchAllGenre();
  }, []);

  useEffect(() => {
    genres.map((genre) => {
      fetchMovieByGenre(genre.id);
    });
  }, [genres]);

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  useEffect(() => {
    setTimeout(() => {
      loadMoreMovies();
      setSpinner(false);
    }, 500);
  }, [pageNum]);

  const fetchMovie = () => {
    fetch(api_details.POPULAR_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  const fetchAllGenre = () => {
    fetch(api_details.ALL_GENRES_URL)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.log(err));
  };

  const fetchMovieByGenre = async (genre) => {
    try {
      const movie = await api_details.fetchMoviesByGenre(genre);

      setCarouselMovieList((prevMovieList) => [...prevMovieList, movie]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchMovies = async () => {
    try {
      setPageNum(1);
      const movie = await api_details.searchMovies(searchTerm, pageNum);

      setSearchedMovies(movie.results);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreMovies = async () => {
    try {
      const movie = await api_details.searchMovies(searchTerm, pageNum);

      setSearchedMovies((prevMovie) =>
        pageNum > 1 ? [...prevMovie, ...movie.results] : [...movie.results]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageIncrement = () => {
    setPageNum((prevNum) => prevNum + 1);
    setSpinner(true);
  };

  return (
    <>
      {movies.length !== 0 && (
        <>
          <Header headerMovie={movies[0]} />{" "}
          <SearchBar
            handleSearchTerm={handleSearchTerm}
            searchTerm={searchTerm}
          />
          <Container>
            {searchTerm !== "" && (
              <>
                <h1 style={{ color: theme.colors.content1 }}>
                  Searched Movies
                </h1>
                <Grid headerTitle={``} movieList={searchedMovies} />
              </>
            )}
            {spinner && <Spinner />}
            {searchTerm !== "" && !spinner && (
              <LoadMoreButton handlePageIncrement={handlePageIncrement} />
            )}

            <h1 style={{ color: theme.colors.content1 }}>Movie Genre</h1>
            <Flex>
              {genres.length !== 0 &&
                genres.map((genre) => {
                  if (genre.id !== 99) {
                    return <CardGenre key={genre.id} genre={genre} />;
                  }
                })}
            </Flex>
          </Container>
        </>
      )}
    </>
  );
}
