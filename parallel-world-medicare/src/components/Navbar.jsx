import { NavLink } from "react-router-dom";
import { Flex, Spacer, Heading, HStack, Image } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Navbar() {
  const { authDetails, logout } = useContext(AuthContext);
  console.log(authDetails);
  const handleLogout = () => {
    logout();
  };

  return (
    <Flex
      align="center"
      bg="yellow"
      justifyContent="space-around"
      marginTop={2}
    >
      <Image
        src="Navbar_logo_2.png"
        alt="logo"
        marginLeft="1rem"
        w="250px"
        h="90px"
      ></Image>
      <Spacer></Spacer>
      <HStack spacing="3rem" marginRight="2rem" fontSize="20px">
        <ChakraLink as={ReactRouterLink} to="/" style={{ color: "maroon" }}>
          Home
        </ChakraLink>
        {/* <ChakraLink
          as={ReactRouterLink}
          to="/Plans"
          style={{ color: "maroon" }}
        >
          Health Plans
        </ChakraLink> */}
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          style={{ color: "maroon" }}
        >
          About
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/diagnostics"
          style={{ color: "maroon" }}
        >
          Diagnostics
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/hospitals"
          style={{ color: "maroon" }}
        >
          Hospitals
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/doctors"
          style={{ color: "maroon" }}
        >
          Doctors
        </ChakraLink>
        {authDetails.isAuth ? (
          <Button
            onClick={handleLogout}
            variant="outline"
            style={{ color: "maroon" }}
          >
            Logout
          </Button>
        ) : (
          <ChakraLink
            as={ReactRouterLink}
            to="/login"
            style={{ color: "maroon" }}
          >
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
