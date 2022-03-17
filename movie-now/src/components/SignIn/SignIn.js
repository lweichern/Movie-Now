import React from "react";
import {
  RightContent,
  SignInContainer,
  SignInContent,
  LeftContent,
  SignUpText,
} from "./SignIn.styled";

import Undraw from "react-undraw";
import { useTheme } from "styled-components";

// Material UI
import { TextField, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function SignIn() {
  const theme = useTheme();

  Undraw.defaultProps.primaryColor = "#fff";

  return (
    <SignInContainer>
      <AnimateSharedLayout>
        <AnimatePresence>
          <SignInContent
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
              <h1 style={{ color: theme.colors.content2 }}>Sign In</h1>
              <TextField
                id="outlined-basic"
                label="Email / Username"
                variant="outlined"
                className="input"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="input"
                type="password"
              />
              <SignUpText>
                Don't have an account yet? Sign Up{" "}
                <Link to={"/sign-up"} style={{ textDecoration: "underline" }}>
                  Here
                </Link>
              </SignUpText>
              <Button
                id="outlined-basic"
                variant="outlined"
                style={{
                  color: theme.colors.content2,
                  border: `1px solid ${theme.colors.content2}`,
                }}
              >
                Sign Up
              </Button>
            </RightContent>
          </SignInContent>
        </AnimatePresence>
      </AnimateSharedLayout>
    </SignInContainer>
  );
}
