import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_Details from "../../API_Details";
import { Container } from "../../commonStyles/Container.styled";
import Header from "./Header/Header";
import Grid from "../../commonStyles/Grid/Grid";

export default function Actor() {
  const { actorId } = useParams();
  const [movies, setMovies] = useState();
  const [actor, setActor] = useState();

  console.log(movies);
  console.log(actor);

  useEffect(() => {
    fetchMoviesThatActorActsIn();
    fetchActorDetails();
  }, []);

  const fetchMoviesThatActorActsIn = async () => {
    try {
      const movie = await API_Details.fetchMoviesThatActorActsIn(actorId);
      setMovies(movie.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchActorDetails = async () => {
    try {
      const actorDetails = await API_Details.fetchActorDetails(actorId);
      setActor(actorDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {actor && (
        <>
          <Header actorDetails={actor} />

          <Container>
            <Grid headerTitle={`${actor.name} Movies`} movieList={movies} />
          </Container>
        </>
      )}
    </>
  );
}
