import { NavLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Spacer,
  Heading,
  HStack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "../style_modules/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { authDetails, logout } = useContext(AuthContext);
  console.log(authDetails);
  const handleLogout = () => {
    logout();
  };

  return (
    <Flex
      align="center"
      bg="yellow"
      justifyContent="space-between"
      marginTop={2}
      className="healthCare__navbar"
    >
      <Box className="healthCare__navbar_logo">
        <Image
          src="Navbar_logo_2.png"
          alt="logo"
          w="330px"
          h="90px"
          onClick={() => {
            navigate("/");
          }}
        ></Image>
      </Box>
      <Spacer></Spacer>
      <Flex
        justifyContent="flex-start"
        gap={8}
        alignItems="center"
        fontSize="1rem"
        className="healthCare__navbar-links_container"
      >
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
        {/* <ChakraLink
          as={ReactRouterLink}
          to="/diagnostics"
          style={{ color: "maroon" }}
        >
          Diagnostics
        </ChakraLink> */}
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
          <>
            <Text style={{ color: "maroon" }}>{authDetails.name}</Text>
            <ChakraLink onClick={handleLogout} style={{ color: "maroon" }}>
              Logout
            </ChakraLink>
          </>
        ) : (
          <ChakraLink
            as={ReactRouterLink}
            to="/login"
            style={{ color: "maroon" }}
            className="healthCare__navbar-login"
          >
            Login
          </ChakraLink>
        )}
      </Flex>
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
