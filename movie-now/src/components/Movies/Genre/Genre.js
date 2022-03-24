import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import api_details from "../../../API_Details";
import { Container } from "../../../commonStyles/Container.styled";
import { Flex } from "../../../commonStyles/Flex.styled";
import Spinner from "../../../commonStyles/Spinner/Spinner";
import Header from "../Header/Header";
import MovieCards from "../MovieCards/MovieCards";
import { ButtonContainer, GenreTitle, LoadMoreBtn } from "./Genre.styled";
import Grid from "../../../commonStyles/Grid/Grid";

export default function Genre() {
  const theme = useTheme();
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreTitle, setGenreTitle] = useState("");
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetchAllGenre();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchPopularMovieByGenre();
      setSpinner(false);
    }, 500);
  }, [page]);

  useEffect(() => {
    genres.map((item) => {
      if (item.id === parseInt(genre)) {
        setGenreTitle(item.name);
      }
    });
  });

  const fetchPopularMovieByGenre = async () => {
    try {
      const movie = await api_details.fetchPopularMovieByGenre(genre, page);

      setMovies((prevMovies) =>
        // convert movie.results from an object to an array
        page > 1 ? [...prevMovies, ...movie.results] : [...movie.results]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllGenre = () => {
    fetch(api_details.ALL_GENRES_URL)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.log(err));
  };

  const handlePageIncrement = () => {
    setPage((prev) => prev + 1);
    setSpinner(true);
  };

  return (
    <>
      {movies.length !== 0 && <Header headerMovie={movies[0]} />}
      <Container>
        <Grid headerTitle={`Popular ${genreTitle} Movie`} movieList={movies} />
        <ButtonContainer>
          {!spinner ? (
            <LoadMoreBtn
              initial={{ scale: 1, background: theme.colors.content1 }}
              whileHover={{ scale: 1.04, background: "#9d1231" }}
              onClick={handlePageIncrement}
            >
              Load More
            </LoadMoreBtn>
          ) : (
            <Spinner></Spinner>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
}
