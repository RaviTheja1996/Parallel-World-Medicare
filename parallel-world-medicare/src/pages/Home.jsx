import styled from "styled-components";
import {
  Image,
  Flex,
  HStack,
  Heading,
  Box,
  Text,
  Center,
  VStack,
  Grid,
  GridItem,
  AbsoluteCenter,
  Button,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDumbbell,
  faEye,
  faHospital,
  faHouseMedical,
  faMagnifyingGlass,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons";

import "../style_modules/GridEffect.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style_modules/ImageCarousel.css";
import ImageCarousel from "../components/ImageCarousel";
import "../style_modules/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const HeroSection = styled.section`
    font-family: Nunito;
    display: flex;
    align-items: center;
  `;

  const HeroSectionLeftContent = styled.div`
    flex: 1;
  `;

  const HeroSectionRightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  `;

  const HelpSection = styled.section`
    font-family: Nunito;
    display: flex;
    height: auto;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 5rem;
  `;

  const HelpSectionRightContent = styled.div`
    flex: 1;
  `;

  const HelpSectionLeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  const HealthInfoSection = styled.section`
    font-family: Nunito;
    display: flex;
    height: auto;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
  `;

  const HealthInfoSectionLeftContent = styled.div`
    flex: 1;
  `;

  const HealthInfoSectionRightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  const images = { c1: "c1.jpeg", c2: "c2.jpeg", c3: "c3.jpeg" };

  return (
    <>
      <section id="hero">
        <HeroSection>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <HeroSectionLeftContent>
              <Image
                src="woman_heart_gesture_cropped-removebg-preview.png"
                alt="woman_with_heart_gesture"
                boxSize="80%"
                marginLeft="10%"
                // marginTop="1rem"
              ></Image>
            </HeroSectionLeftContent>
            <HeroSectionRightContent>
              <VStack align={{ base: "center", md: "start", lg: "start" }}>
                <Heading size="3xl">
                  <span style={{ color: "purple" }}>Take Care of Your</span>
                  <br />
                  <span style={{ color: "white" }}>
                    Health Anytime Anywhere.
                  </span>
                </Heading>
                <p
                  style={{
                    width: "60%",
                    color: "gray",
                    fontSize: "18px",
                    marginTop: "1.5rem",
                  }}
                >
                  Here at parallel world medicare our motto is to provide you
                  with Healing that's Otherworldly.
                </p>
                <Stack
                  direction={["row"]}
                  spacing={4}
                  marginTop={8}
                  color="white"
                  w="100%"
                  justifyContent={{ base: "center", md: "start" }}
                >
                  <VStack>
                    <Box w="5rem">
                      <Text fontSize="2xl">30+</Text>
                    </Box>
                    <Text fontSize="xs" maxWidth="5rem" color="gray">
                      Years of Excellent
                    </Text>
                  </VStack>
                  <VStack>
                    <Box w="5rem">
                      <Text fontSize="2xl">53k</Text>
                    </Box>
                    <Text fontSize="xs" maxWidth="5rem" color="gray">
                      Case Completed
                    </Text>
                  </VStack>
                  <VStack>
                    <Box w="5rem">
                      <Text fontSize="2xl">100%</Text>
                    </Box>
                    <Text fontSize="xs" maxWidth="5rem" color="gray">
                      Client Satisfaction
                    </Text>
                  </VStack>
                </Stack>
              </VStack>
            </HeroSectionRightContent>
          </Flex>
        </HeroSection>
        <Center marginTop={8}>
          <Grid
            h="70vh"
            w="80%"
            templateRows="auto"
            templateColumns={{
              base: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={1}
          >
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon icon={faUserDoctor} size="lg" />
                  <Text color="#3d6c82">Doctors</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon icon={faHospital} size="lg" />
                  <Text color="#3d6c82">Hospitals</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon
                    icon={faHouseMedical}
                    size="lg"
                  ></FontAwesomeIcon>
                  <Text color="#3d6c82">Nursing Homes</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon icon={faEye} size="lg"></FontAwesomeIcon>
                  <Text color="#3d6c82">Eye Care</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon
                    icon={faDumbbell}
                    size="lg"
                  ></FontAwesomeIcon>
                  <Text color="#3d6c82">Rehab</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                  ></FontAwesomeIcon>
                  <Text color="#3d6c82">Dialysis Facilities</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="lg"
                  ></FontAwesomeIcon>
                  <Text color="#3d6c82">Health Schedule</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
            <GridItem bg="white" position="relative" className="grid-element">
              <AbsoluteCenter>
                <HStack>
                  <FontAwesomeIcon
                    icon={faTruckMedical}
                    size="lg"
                  ></FontAwesomeIcon>
                  <Text color="#3d6c82">Ambulance Call</Text>
                </HStack>
              </AbsoluteCenter>
            </GridItem>
          </Grid>
        </Center>
      </section>
      <section id="help">
        <HelpSection>
          <Flex
            direction={{ lg: "row", md: "column", base: "column" }}
            style={{
              border: "3px solid tomato",
              padding: "1rem",
              borderRadius: "30px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "rgb(230, 230, 230)",
            }}
          >
            <HelpSectionLeftContent>
              <Heading as="b">
                <span style={{ color: "#084560" }}>Our</span>
                <span style={{ color: "#ff8a01" }}> Quality System</span>{" "}
                <span style={{ color: "#084560" }}> is</span>
                <span style={{ color: "#084560" }}> Ready to</span>{" "}
                <span style={{ color: "#ff8a01" }}> Help You!</span>
              </Heading>
              <Text marginTop="2rem" as="b" fontSize="lg">
                <span style={{ color: "#ff8a01" }}>Favorite </span>
                <span style={{ color: "#084560" }}>
                  for health care because of some <br />
                  excellent
                </span>
                <span style={{ color: "#ff8a01" }}>
                  {" "}
                  features for daily use
                  <span style={{ color: "#084560" }}>.</span>
                </span>
              </Text>
              <Text marginTop="1.5rem">
                Regular monitoring and assessment play a critical role in
                maintaining healthcare quality. This involves collecting and
                analyzing data related to various aspects of patient care, such
                as treatment outcomes, patient satisfaction, and safety
                incidents.
              </Text>
              <Flex
                marginTop="1.5rem"
                spacing="20%"
                direction={{ base: "column", md: "row", lg: "row" }}
                gap={4}
              >
                <VStack spacing={4} align="start">
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      24 Hours Service
                    </Text>
                  </HStack>
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      Discounts & Updates
                    </Text>
                  </HStack>
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      User Friendly
                    </Text>
                  </HStack>
                </VStack>
                <VStack spacing={4} align="start">
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      Update Covid 19
                    </Text>
                  </HStack>
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      Tips & Trick Video
                    </Text>
                  </HStack>
                  <HStack>
                    <ArrowForwardIcon color="orange" />
                    <Text color="#084560" fontSize="sm" as="b">
                      Assistant Calendar
                    </Text>
                  </HStack>
                </VStack>
              </Flex>
            </HelpSectionLeftContent>
            <HelpSectionRightContent>
              <Center>
                <Image
                  src="womenFinerPoint-no-background.png"
                  w="70%"
                  h="100%"
                  marginTop="5rem"
                ></Image>
              </Center>
            </HelpSectionRightContent>
          </Flex>
        </HelpSection>
      </section>
      <section id="healthInfo">
        <Center>
          <HealthInfoSection
            style={{
              border: "3px solid tomato",
              padding: "1rem",
              borderRadius: "30px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "rgb(235, 235, 235)",
            }}
          >
            <Flex direction={{ base: "column", md: "column", lg: "row" }}>
              <HealthInfoSectionLeftContent>
                <Center>
                  <Image src="healthInfoSectionImage-no-background.png"></Image>
                </Center>
              </HealthInfoSectionLeftContent>
              <HealthInfoSectionRightContent>
                <VStack align="start" spacing={6}>
                  <Heading as="h1" style={{ fontWeight: "bold" }}>
                    <span style={{ color: "#084560" }}>We </span>
                    <span style={{ color: "#ff8a01" }}>Hold Everything </span>
                    <br />
                    <span style={{ color: "#084560" }}>Close to Health.</span>
                  </Heading>
                  <Text color="#084560">
                    Key components of a healthcare quality system include the
                    establishment of evidence-based protocols and guidelines,
                    rigorous monitoring and assessment mechanisms, and a culture
                    of open communication and learning
                  </Text>
                  <Text as="b">
                    <span style={{ color: "#ff8a01", fontSize: "1.2rem" }}>
                      450{" "}
                    </span>{" "}
                    <span style={{ color: "#084560", fontSize: "1.2rem" }}>
                      M+{" "}
                    </span>
                    <span style={{ color: "#084560", fontSize: "0.8rem" }}>
                      Our Agent.
                    </span>
                  </Text>
                </VStack>
              </HealthInfoSectionRightContent>
            </Flex>
          </HealthInfoSection>
        </Center>
      </section>
      <section id="register" style={{ marginTop: "2rem" }}>
        <Center>
          <Box
            w="80%"
            m="auto"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              border: "3px solid tomato",
              padding: "1rem",
              borderRadius: "30px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "rgb(230, 230, 230)",
            }}
          >
            <Flex
              direction={{ base: "column", md: "column", lg: "row" }}
              gap={8}
            >
              <VStack spacing={4} w="65%" align="start">
                <Text as="b" fontSize="4xl">
                  <span style={{ color: "#084560" }}>The Future of</span>
                  <br />
                  <span style={{ color: "#ff8a01" }}>Quality</span>
                  <span style={{ color: "#084560" }}> Your</span>
                  <span style={{ color: "#ff8a01" }}> Health</span>
                  <span style={{ color: "#084560" }}>.</span>
                </Text>
                <Text color="#084560">
                  fostering a culture of open communication and learning is
                  fundamental to a successful healthcare quality system.
                </Text>
              </VStack>
              {/* <Spacer /> */}
              {/* <Box> */}
              {/* <Center> */}
              <Button
                className="button-element"
                bg="#ff8a01"
                color="white"
                leftIcon={<LinkIcon />}
                onClick={() => {
                  navigate("/register");
                }}
                mx="auto"
                my="auto"
              >
                Register Now
              </Button>
              {/* </Center> */}
              {/* </Box> */}
            </Flex>
            <Grid
              templateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
              gap={2}
              h="30vh"
            >
              <GridItem
                bg="#f8f8f8"
                position="relative"
                className="grid-element"
              >
                <AbsoluteCenter>
                  <Text>
                    <h1>Health Consultation</h1>
                  </Text>
                </AbsoluteCenter>
              </GridItem>
              <GridItem
                bg="#f8f8f8"
                position="relative"
                className="grid-element"
              >
                <AbsoluteCenter>
                  <Text>
                    <h1>Finding Health Need</h1>
                  </Text>
                </AbsoluteCenter>
              </GridItem>
              <GridItem
                bg="#f8f8f8"
                position="relative"
                className="grid-element"
              >
                <AbsoluteCenter>
                  <Text>
                    <h1>Star Health Care</h1>
                  </Text>
                </AbsoluteCenter>
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </section>
      <section id="About" style={{ marginTop: "3rem" }}>
        <Flex
          direction="column"
          align="center"
          w="80%"
          mx="auto"
          style={{
            border: "3px solid tomato",
            padding: "1rem",
            borderRadius: "30px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor: "rgb(230, 230, 230)",
          }}
        >
          <Box w="60%">
            <Center>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                <span style={{ color: "#084560" }}>What </span>
                <span style={{ color: "#ff8a01" }}>People Say</span>
                <br />
                <Center>
                  <span style={{ color: "#084560" }}>About Us</span>
                </Center>
              </Text>
            </Center>
          </Box>
          <Box
            marginTop="2rem"
            w="98%"
            style={{ margin: "auto", backgroundColor: "#4AAC50" }}
            className="ImageCarousel"
          >
            <ImageCarousel images={images}></ImageCarousel>
          </Box>
        </Flex>
      </section>
      <section id="partners" style={{ marginTop: "2rem" }}>
        <Image src="partners.png" style={{ margin: "auto" }}></Image>
      </section>
    </>
  );
}
