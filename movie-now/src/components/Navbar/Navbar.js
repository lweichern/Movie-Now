import React from "react";
import {
  StyledNavHeader,
  StyledNavContent,
  StyledLogo,
  StyledLinks,
  StyledLinkItems,
  StyledSignIn,
  SignOutButton,
  StyledSignOut,
  Username,
} from "./Navbar.styled";
import { Container } from "../../commonStyles/Container.styled";
import { Link } from "react-router-dom";
import SignOut from "../SignOut/SignOut";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const dispatch = useDispatch();
  const handleSignOut = () => {
    const updatedUser = JSON.parse(window.localStorage.getItem("user"));
    const allUsers = JSON.parse(window.localStorage.getItem("users"));

    const updatedUserArray = allUsers.filter(
      (item) => item.username !== user.username
    );

    updatedUserArray.push(updatedUser);

    window.localStorage.setItem("users", JSON.stringify(updatedUserArray));

    window.localStorage.setItem("user", JSON.stringify(null));

    dispatch(logout());

    window.location.reload();
  };

  return (
    <StyledNavHeader>
      <Container>
        <StyledNavContent>
          <StyledLogo>MovieNow</StyledLogo>
          <StyledLinks>
            <Link to={"/"}>
              <StyledLinkItems>Home</StyledLinkItems>
            </Link>

            <Link to={"/movies"}>
              <StyledLinkItems>Movies</StyledLinkItems>
            </Link>

            <StyledLinkItems>Actors</StyledLinkItems>
            <StyledLinkItems>Contact Us</StyledLinkItems>
          </StyledLinks>
          {JSON.parse(window.localStorage.getItem("user")) === null ? (
            <Link to={"/sign-in"}>
              <StyledSignIn>Sign In</StyledSignIn>
            </Link>
          ) : (
            <StyledSignOut>
              <Username>
                <FaUserCircle /> {user.username}
              </Username>
              <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
            </StyledSignOut>
          )}
        </StyledNavContent>
      </Container>
    </StyledNavHeader>
  );
}
