import React, { useContext } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faX,
  faInfoCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { getUsers } from "../api/apiRequests";
import { validateLogin } from "../scripts/login";
import "../style_modules/login.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,14}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Login = () => {
  const { login } = useContext(AuthContext);
  const toast = useToast();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [show, setShow] = useState(false);
  const handleShowPasswordClick = () => setShow(!show);

  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const result = USER_REGEX.test(username);
    // console.log(result);
    // console.log(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    // console.log(result);
    // console.log(password);
    setValidPwd(result);
  }, [password]);

  useEffect(() => {
    userRef.current.focus();
    let usersRes = getUsers();
    usersRes.then((res) => {
      console.log(res, "inside login component");
      setUsers(res);
    });
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  function handleLogin() {
    console.log(users, "before validation");
    let isValidCred = validateLogin(users, username, password);
    console.log(isValidCred);
    if (isValidCred) {
      console.log("authenticated");
      login(username);
      toast({
        title: "Login Successful",
        description: "Credentials are correct",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const v1 = USER_REGEX.test(username);
      const v2 = PWD_REGEX.test(password);
      if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
      } else {
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section style={{ marginTop: "2rem" }} className="form-section">
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <Center>
        <Heading as="b" style={{ color: "purple" }}>
          Login Form
        </Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel color="black" marginTop="2rem">
            UserName :
            <span className={validName ? "valid" : "hide"}>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green" }}
              ></FontAwesomeIcon>
            </span>
            <span className={validName || !username ? "hide" : "invalid"}>
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "red" }}
              ></FontAwesomeIcon>
            </span>
          </FormLabel>
          <Input
            type="text"
            id="username"
            placeholder="Enter Username"
            autoComplete="off"
            ref={userRef}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={
              userFocus && username && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 15 characters.
            <br />
            must begin with a letter.
            <br />
            letters, numbers, underscores, hyphens allowed.
          </p>
          <FormLabel marginTop={6}>
            Password :
            <span className={validPwd ? "valid" : "hide"}>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green" }}
              ></FontAwesomeIcon>
            </span>
            <span className={validPwd || !password ? "hide" : "invalid"}>
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "red" }}
              ></FontAwesomeIcon>
            </span>
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <InputRightElement w="23%" marginBottom={2}>
              <Button
                h="1.75rem"
                variant="outline"
                size="sm"
                onClick={handleShowPasswordClick}
                leftIcon={<FontAwesomeIcon icon={show ? faEyeSlash : faEye} />}
                style={{ marginBottom: "1rem", marginRight: "0.5rem" }}
              >
                {show ? "Hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 15 characters.
            <br />
            must include at least one uppercase and lowercase letter and a
            number and a special character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
          </p>
          <Button
            type="submit"
            w="100%"
            variant="solid"
            className="Login-btn"
            onClick={handleLogin}
            marginTop={6}
            isDisabled={!validName || !validPwd ? true : false}
          >
            Login
          </Button>
        </FormControl>
        <p style={{ marginTop: "2rem" }}>
          Not a User?
          <br />
          <span className="line">
            <ChakraLink
              as={ReactRouterLink}
              to="/register"
              style={{ color: "blue" }}
            >
              Register
            </ChakraLink>
          </span>
        </p>
      </form>
    </section>
  );
};
