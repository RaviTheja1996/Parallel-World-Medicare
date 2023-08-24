import { NavLink } from "react-router-dom";
import { Flex, Spacer, Heading, HStack, Image } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Navbar() {
  const { authDetails, login, logout } = useContext(AuthContext);
  console.log(authDetails);
  const handleLogout = () => {
    logout();
  };

  return (
    <Flex align="center" p={4}>
      <Image src="parallel-world-medicare-logo.png" alt="logo"></Image>
      <Spacer></Spacer>
      <HStack>
        <ChakraLink as={ReactRouterLink} to="/">
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/Plans">
          Health Plans
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/about">
          About
        </ChakraLink>
        {authDetails.isAuth ? (
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        ) : (
          <ChakraLink as={ReactRouterLink} to="/login">
            Login
          </ChakraLink>
        )}
      </HStack>
    </Flex>
    // <>
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/doctors">Doctors</NavLink>
    //   <NavLink to="/hospitals">Hospitals</NavLink>
    //   <NavLink to="/checkout">Checkout</NavLink>
    //   <NavLink to="/diagnostics">Diagnostics</NavLink>
    //   <NavLink to="/login">Login</NavLink>
    //   <NavLink to="/plans">Plans</NavLink>
    //   <NavLink to="/admin">Admin</NavLink>
    // </>
  );
}
