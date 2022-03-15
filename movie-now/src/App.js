import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./commonStyles/Global";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";

export default function App() {
  const theme = {
    colors: {
      body: "#fff",
      content1: "#fa1e4e",
      content2: "#5c1efa",
    },
    mobile: "768px",
    tablet: "1024px",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}
