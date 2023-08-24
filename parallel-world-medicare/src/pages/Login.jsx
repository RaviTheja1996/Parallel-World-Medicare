import React, { useContext } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import { useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export const Login = () => {
  const [password, setPassword] = useState("");

  const { authDetails, login, logout } = useContext(AuthContext);

  function handleLogin(email, password) {
    login(email, password);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Center>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel marginTop={6}>Password</FormLabel>
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
        </form>
      </Center>
      <p>
        Not a User?
        <br />
        <span>
          <ChakraLink as={ReactRouterLink} to="/register">
            Register
          </ChakraLink>
        </span>
      </p>
    </div>
  );
};
