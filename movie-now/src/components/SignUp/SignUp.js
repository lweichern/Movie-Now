import React from "react";
import {
  RightContent,
  SignUpContainer,
  SignUpContent,
  LeftContent,
  SignUpText,
} from "./SignUp.styled";

import Undraw from "react-undraw";
import { useTheme } from "styled-components";

// Material UI
import { TextField, Button } from "@mui/material";

import { Link } from "react-router-dom";

export default function SignUp() {
  const theme = useTheme();

  Undraw.defaultProps.primaryColor = "#fff";

  return (
    <SignUpContainer>
      <SignUpContent
        layoutId="division"
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <LeftContent>
          <Undraw name="sign-in" style={{ height: "80vh" }} />
        </LeftContent>
        <RightContent>
          <h1 style={{ color: theme.colors.content1 }}>Sign Up</h1>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="input"
            type="email"
          />

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="input"
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="input"
            type="password"
          />
          <SignUpText>
            Already have an account? Sign In{" "}
            <Link to={"/sign-in"} style={{ textDecoration: "underline" }}>
              Here
            </Link>
          </SignUpText>
          <Button
            id="outlined-basic"
            variant="outlined"
            style={{
              color: theme.colors.content1,
              border: `1px solid ${theme.colors.content1}`,
            }}
          >
            Sign Up
          </Button>
        </RightContent>
      </SignUpContent>
    </SignUpContainer>
  );
}
