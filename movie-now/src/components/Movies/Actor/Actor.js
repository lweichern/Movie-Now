import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_Details from "../../../API_Details";

export default function Actor() {
  const { actorId } = useParams();
  const [movies, setMovies] = useState();

  console.log(movies);

  useEffect(() => {
    fetchMoviesThatActorActsIn();
  }, []);

  const fetchMoviesThatActorActsIn = async () => {
    try {
      const actorDetails = await API_Details.fetchMoviesThatActorActsIn(
        actorId
      );
      setMovies(actorDetails.cast);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>Actor {actorId}</div>;
}
