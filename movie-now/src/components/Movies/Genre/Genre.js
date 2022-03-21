import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_details from "../../../API_Details";
import { Container } from "../../../commonStyles/Container.styled";
import { Flex } from "../../../commonStyles/Flex.styled";
import MovieCards from "../MovieCards/MovieCards";
import { GenreTitle } from "./Genre.styled";

export default function Genre() {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreTitle, setGenreTitle] = useState("");

  console.log(genreTitle);

  useEffect(() => {
    fetchTopRatedMovieByGenre();
    fetchAllGenre();
  }, []);

  useEffect(() => {
    genres.map((item) => {
      if (item.id === parseInt(genre)) {
        setGenreTitle(item.name);
      }
    });
  });

  const fetchTopRatedMovieByGenre = async () => {
    try {
      const movie = await api_details.fetchTopRatedMovieByGenre(genre);
      setMovies(movie.results);
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

  return (
    <Container>
      <GenreTitle>Top Rated {genreTitle} Movie</GenreTitle>
      <Flex>
        {movies.length !== 0 &&
          movies.map((movie) => {
            return <MovieCards key={movie.id} movie={movie} />;
          })}
      </Flex>
    </Container>
  );
}
