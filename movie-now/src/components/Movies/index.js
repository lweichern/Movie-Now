import React, { useEffect, useState } from "react";
import api_details from "../../API_Details";
import { Container } from "../../commonStyles/Container.styled";
import { Flex } from "../../commonStyles/Flex.styled";
import Carousel from "../Home/Carousel/Carousel";
import CardGenre from "./CardGenre/CardGenre";
import { useTheme } from "styled-components";

// components
import Header from "./Header/Header";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [carouselMovieList, setCarouselMovieList] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    fetchMovie();
    fetchAllGenre();
  }, []);

  useEffect(() => {
    genres.map((genre) => {
      fetchMovieByGenre(genre.id);
    });
  }, [genres]);

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

  return (
    <>
      {movies.length !== 0 && (
        <>
          {" "}
          <Header headerMovie={movies[0]} />
          {/* {carouselMovieList.length !== 0 &&
            carouselMovieList.map((movieList, index) => {
              return (
                <Carousel
                  key={genres[index].id}
                  carouselTitle={genres[index].name}
                  movieList={movieList.results}
                  autoplay={false}
                />
              );
            })} */}
          <Container>
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
