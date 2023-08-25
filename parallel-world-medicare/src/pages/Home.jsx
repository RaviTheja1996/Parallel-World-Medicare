import styled from "styled-components";
import {
  Image,
  HStack,
  Heading,
  Box,
  Text,
  Center,
  VStack,
  Grid,
  GridItem,
  AbsoluteCenter,
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

import { ArrowForwardIcon } from "@chakra-ui/icons";

import "../style_modules/GridEffect.css";

export default function Home() {
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
    height: 90vh;
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
    height: 90vh;
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

  const HoverEffect = styled.div`
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }
  `;

  const GradientSection = styled.section`
    background: linear-gradient(
      to bottom right,
      #ff9900 0%,
      #ff9900 20%,
      #296d5c 20%,
      #4caf50 100%
    );
  `;

  return (
    <>
      <section id="hero">
        <GradientSection style={{ width: "100%", height: "135vh" }}>
          <HeroSection>
            <HStack>
              <HeroSectionLeftContent>
                <Image
                  src="woman_heart_gesture_cropped-removebg-preview.png"
                  alt="woman_with_heart_gesture"
                  boxSize="80%"
                  marginLeft="10%"
                ></Image>
              </HeroSectionLeftContent>
              <HeroSectionRightContent>
                <Heading size="3xl">
                  <span style={{ color: "#bdfadd" }}>Take Care of Your</span>
                  <br />
                  <span style={{ color: "white" }}>
                    Health Anytime Anywhere.
                  </span>
                </Heading>
                <p
                  style={{
                    width: "60%",
                    color: "#6cae96",
                    fontSize: "18px",
                    marginTop: "1.5rem",
                  }}
                >
                  Here at parallel world medicare our motto is to provide you
                  with Healing that's Otherworldly.
                </p>
                <HStack spacing={4} marginTop={8} color="white">
                  <Box w="20%">
                    <VStack>
                      <Box w="5rem">
                        <Text fontSize="2xl">30+</Text>
                      </Box>
                      <Text fontSize="xs" maxWidth="5rem" color="#88c5a4">
                        Years of Excellent
                      </Text>
                    </VStack>
                  </Box>
                  <Box w="20%">
                    <VStack>
                      <Box w="5rem">
                        <Text fontSize="2xl">53k</Text>
                      </Box>
                      <Text fontSize="xs" maxWidth="5rem" color="#88c5a4">
                        Case Completed
                      </Text>
                    </VStack>
                  </Box>
                  <Box w="20%">
                    <VStack>
                      <Box w="5rem">
                        <Text fontSize="2xl">100%</Text>
                      </Box>
                      <Text fontSize="xs" maxWidth="5rem" color="#88c5a4">
                        Client Satisfaction
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </HeroSectionRightContent>
            </HStack>
          </HeroSection>
          <Center marginTop={8}>
            <Grid
              h="50vh"
              w="80%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4,1fr)"
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
        </GradientSection>
      </section>
      <section id="help">
        <HelpSection>
          <HStack>
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
              <HStack marginTop="1.5rem" spacing="20%">
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
              </HStack>
            </HelpSectionLeftContent>
            <HelpSectionRightContent>
              <Image
                src="womenFinerPoint-no-background.png"
                w="70%"
                h="100%"
                marginTop="5rem"
              ></Image>
            </HelpSectionRightContent>
          </HStack>
        </HelpSection>
      </section>
      <section id="healthInfo">
        <Center>
          <HealthInfoSection>
            <HealthInfoSectionLeftContent>
              <HStack spacing="2rem">
                <Image src="healthInfoSectionImage-no-background.png"></Image>
                <VStack></VStack>
              </HStack>
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
          </HealthInfoSection>
        </Center>
      </section>
    </>
  );
}
