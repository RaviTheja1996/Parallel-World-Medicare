import React, { useContext } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import { useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { getUsers } from "../api/apiRequests";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();
  const errRef = useRef();

  const { authDetails, login, logout } = useContext(AuthContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  function handleLogin() {
    let users = getUsers();
    let isValidCred = false;
    // {
    //   users.map((el) => {
    //     for (let key in el) {
    //       if (el.username === username && el.password === password) {
    //         isValidCred = true;
    //         break;
    //       }
    //     }
    //   });
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section style={{ marginTop: "2rem" }} className="login-form">
      <Center></Center>
      <Center marginTop="2rem" style={{ maxWidth: "50%", margin: "auto" }}>
        {/* <Heading as="b" fontSize="xl">
          Login
        </Heading> */}
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>UserName :</FormLabel>
            <Input
              type="text"
              ref={userRef}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormLabel marginTop={6}>Password :</FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={handleLogin} marginTop={6}>
              Login
            </Button>
          </FormControl>

          <p style={{ marginTop: "2rem", fontSize: "18px" }}>
            Not a User?
            <br />
            <span>
              <ChakraLink
                as={ReactRouterLink}
                to="/register"
                style={{ color: "black" }}
              >
                Register
              </ChakraLink>
            </span>
          </p>
        </form>
      </Center>
    </section>
  );
};
