import React from "react";
import {
  SearchBarTextField,
  SearchContainer,
  SearchContent,
} from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchTerm, handleSearchTerm }) {
  return (
    <SearchContainer>
      <SearchContent>
        <FaSearch style={{ fontSize: "25px", color: "#484848" }} />
        <SearchBarTextField
          type="search"
          placeholder="Search Movie..."
          onChange={handleSearchTerm}
          value={searchTerm}
        />
      </SearchContent>
    </SearchContainer>
  );
}
