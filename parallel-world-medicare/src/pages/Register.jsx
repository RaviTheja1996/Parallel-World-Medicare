import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faCalendarTimes,
  faInfoCircle,
  faX,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Center,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import axios from "../api/axios";
import "../style_modules/register.css";
import { addUser } from "../api/apiRequests";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,14}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const toast = useToast();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [show, setShow] = useState(false);
  const handleShowPasswordClick = () => setShow(!show);

  const [confirmShow, setConfirmShow] = useState(false);
  const handleConfirmShowPasswordClick = () => setConfirmShow(!confirmShow);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    // console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    // console.log(user, pwd);
    // setSuccess(true);
    try {
      // const response = await axios.post(
      //   REGISTER_URL,
      //   JSON.stringify(
      //     { user, pwd },
      //     {
      //       headers: { "Content-type": "application/json" },
      //       withCredentials: true,
      //     }
      //   )
      // );
      // console.log(response.data);
      // console.log(JSON.stringify(response));
      addUser({ user, pwd });
      toast({
        title: "Registration Successful",
        description: "Details are correctly provided",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setSuccess(true);
      // clear the input field values
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
    <>
      {success ? (
        <section className="formsection" style={{ marginTop: "2rem" }}>
          <Center>
            <VStack spacing={6} align="center">
              <Text fontSize="3xl" color="purple">
                Success!
              </Text>
              <Text>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/login"
                  style={{ color: "blue" }}
                >
                  Login
                </ChakraLink>
              </Text>
            </VStack>
          </Center>
        </section>
      ) : (
        <section className="form-section" style={{ marginTop: "2rem" }}>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Center>
            <Heading as="b" style={{ color: "purple" }}>
              Register Form
            </Heading>
          </Center>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color="black" marginTop="2rem">
                Username:
                <span className={validName ? "valid" : "hide"}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
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
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              ></Input>
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 15 characters.
                <br />
                must begin with a letter.
                <br />
                letters, numbers, underscores, hyphens allowed.
              </p>
              <FormLabel color="black">
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
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
                    setPwd(e.target.value);
                  }}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                ></Input>
                <InputRightElement w="23%" marginBottom={2}>
                  <Button
                    h="1.75rem"
                    variant="outline"
                    size="sm"
                    onClick={handleShowPasswordClick}
                    leftIcon={
                      <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                    }
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
              <FormLabel color="black">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "red" }}
                  ></FontAwesomeIcon>
                </span>
              </FormLabel>
              <InputGroup>
                <Input
                  type={confirmShow ? "text" : "password"}
                  id="confirm_pwd"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setMatchPwd(e.target.value);
                  }}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                ></Input>
                <InputRightElement w="23%" marginBottom={2}>
                  <Button
                    h="1.75rem"
                    variant="outline"
                    size="sm"
                    onClick={handleConfirmShowPasswordClick}
                    leftIcon={
                      <FontAwesomeIcon
                        icon={confirmShow ? faEyeSlash : faEye}
                      />
                    }
                    style={{ marginBottom: "1rem", marginRight: "0.5rem" }}
                  >
                    {confirmShow ? "Hide" : "show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                must match the first password input field value.
              </p>
              <Button
                type="submit"
                w="100%"
                variant="solid"
                className="SignUp-btn"
                isDisabled={
                  !validName || !validPwd || !validMatch ? true : false
                }
              >
                Sign Up
              </Button>
            </FormControl>
          </form>
          <p>
            Already Registered?
            <br />
            <span className="line">
              <ChakraLink
                as={ReactRouterLink}
                to="/login"
                style={{ color: "blue" }}
              >
                Login
              </ChakraLink>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
