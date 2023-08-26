import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faCalendarTimes,
  faInfoCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import axios from "../api/axios";
import "../style_modules/register.css";
import { addUser } from "../api/apiRequests";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,14}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;
const REGISTER_URL = `/users`;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
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
          <h1>Success!</h1>
          <p>
            <ChakraLink as={ReactRouterLink} to="/login">
              Login
            </ChakraLink>
          </p>
        </section>
      ) : (
        <section className="formsection" style={{ marginTop: "2rem" }}>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register Form</h1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>
                {"Username: "}
                <span className={validName ? "valid" : "hide"}>
                  {/* <i class="fa-solid fa-check" style={{ color: "#00ff00" }}></i> */}
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                  {/* <i class="fa-solid fa-x" style={{ color: "#ff0000" }}></i> */}
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "red" }}
                  ></FontAwesomeIcon>
                </span>
              </FormLabel>
              <Input
                type="text"
                id="username"
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
              {/* password field code */}
              <FormLabel>
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
              <Input
                type="password"
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
              {/* password matching code */}
              <FormLabel>
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
              <Input
                type="password"
                id="confirm_pwd"
                onChange={(e) => {
                  setMatchPwd(e.target.value);
                }}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              ></Input>
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
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </Button>
            </FormControl>
          </form>
          <p>
            Already Registered?
            <br />
            <span className="line">
              <ChakraLink as={ReactRouterLink} to="/login">
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
