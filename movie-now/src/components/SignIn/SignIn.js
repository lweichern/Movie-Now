import React, { useEffect, useState } from "react";
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

// Redux
import { login } from "../../redux/features/userSlice";

// React Routers
import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

  Undraw.defaultProps.primaryColor = "#fff";

  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.localStorage.setItem("user", null);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isUsernameFound = true;
    const usersArray = JSON.parse(window.localStorage.getItem("users"));
    const usernameArray = [];

    // dispatch(login(userObject));

    usersArray.map((item) => {
      usernameArray.push(item.username);
      usernameArray.push(item.email);
    });

    usersArray.map((item) => {
      if (username === item.email || username === item.username) {
        if (password === item.password) {
          window.localStorage.setItem("user", JSON.stringify(item));
          window.location.href = "/";
          setUsername("");
          setPassword("");
        } else {
          alert("Incorrect Password!");
        }
      }
    });

    if (!usernameArray.includes(username)) {
      alert("Username not found!");
    }
  };

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
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Email / Username"
                  variant="outlined"
                  className="input"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="input"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
                  type="submit"
                  style={{
                    color: theme.colors.content2,
                    border: `1px solid ${theme.colors.content2}`,
                  }}
                >
                  Sign In
                </Button>
              </form>
            </RightContent>
          </SignInContent>
        </AnimatePresence>
      </AnimateSharedLayout>
    </SignInContainer>
  );
}
