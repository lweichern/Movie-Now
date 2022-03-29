import React from "react";
import MovieCards from "../../components/Movies/MovieCards/MovieCards";
import { HeaderTitle } from "./Grid.styled";
import { Flex } from "../Flex.styled";
import ActorCards from "../../components/MovieDetails/ActorCards/ActorCards";

export default function Grid({ headerTitle, movieList, castList }) {
  return (
    <div>
      {movieList && (
        <>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          <Flex style={{ alignItems: "stretch" }} layout>
            {movieList.length !== 0 &&
              movieList.map((item) => {
                return <MovieCards key={item.id} movie={item} />;
              })}
          </Flex>
        </>
      )}

      {castList && (
        <>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          <div
            style={{
              display: "grid",
              gridTemplate: "auto auto / repeat(4, 1fr)",
              gridGap: "2rem",
            }}
          >
            {castList &&
              castList.cast.map((cast) => {
                return <ActorCards key={cast.id} profile={cast} />;
              })}
          </div>
        </>
      )}
    </div>
  );
}
