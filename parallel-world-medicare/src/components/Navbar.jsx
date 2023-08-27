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
import { useContext, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "../style_modules/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { authDetails, logout } = useContext(AuthContext);

  const [homeLink, setHomeLink] = useState(true);
  const [aboutLink, setAboutLink] = useState(false);
  const [hospitalsLink, setHospitalsLink] = useState(false);
  const [doctorsLink, setDoctorsLink] = useState(false);
  const [loginLink, setLoginLink] = useState(false);

  const handleHomeLink = () => {
    setHomeLink(!homeLink);
    setAboutLink(false);
    setHospitalsLink(false);
    setDoctorsLink(false);
    setLoginLink(false);
  };
  const handleAboutLink = () => {
    setHomeLink(false);
    setAboutLink(!aboutLink);
    setHospitalsLink(false);
    setDoctorsLink(false);
    setLoginLink(false);
  };
  const handleHospitalsLink = () => {
    setHomeLink(false);
    setAboutLink(false);
    setHospitalsLink(!hospitalsLink);
    setDoctorsLink(false);
    setLoginLink(false);
  };
  const handleDoctorsLink = () => {
    setHomeLink(false);
    setAboutLink(false);
    setHospitalsLink(false);
    setDoctorsLink(!doctorsLink);
    setLoginLink(false);
  };
  const handleLoginLink = () => {
    setHomeLink(false);
    setAboutLink(false);
    setHospitalsLink(false);
    setDoctorsLink(false);
    setLoginLink(!loginLink);
  };

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
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          onClick={handleHomeLink}
          style={{ color: homeLink ? "red" : "maroon" }}
        >
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
          onClick={handleAboutLink}
          style={{ color: aboutLink ? "red" : "maroon" }}
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
          onClick={handleHospitalsLink}
          style={{ color: hospitalsLink ? "red" : "maroon" }}
        >
          Hospitals
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/doctors"
          onClick={handleDoctorsLink}
          style={{ color: doctorsLink ? "red" : "maroon" }}
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
            onClick={handleLoginLink}
            style={{ color: loginLink ? "red" : "maroon" }}
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
