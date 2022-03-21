import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./commonStyles/Global";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  HashRouter,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Movie from "./components/Movies";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Genre from "./components/Movies/Genre/Genre";

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
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/movies/genre/:genre" exact element={<Genre />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
