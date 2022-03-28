import React from "react";
import { LoadMore, LoadMoreContainer } from "./LoadMoreButton.styled";

export default function LoadMoreButton({ handlePageIncrement }) {
  return (
    <LoadMoreContainer>
      <LoadMore
        onClick={handlePageIncrement}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Load More
      </LoadMore>
    </LoadMoreContainer>
  );
}
