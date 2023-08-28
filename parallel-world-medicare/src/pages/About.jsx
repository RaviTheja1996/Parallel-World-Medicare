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
  Divider,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <section id="about">
      <Box
        class="hero-section"
        h="70vh"
        bgImage="url('doctor-health-icon-resized.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex alignItems="center" h="70vh">
          <VStack
            align="start"
            color="black"
            spacing={4}
            style={{
              zIndex: "90",
              textShadow: "1.5px 1.5px 2px rgba(0, 0, 0, 0.3)",
              marginLeft: "3rem",
            }}
            w="40%"
          >
            <Text fontSize="2xl" as="b">
              Holistic Primary Care, Cardiology, and Functional Medicine.
            </Text>
            <Spacer />
            <Text fontSize="md">A mind-body/functional approach.</Text>
            <Text fontSize="md">
              Culinary medicine and solution-based wellness programs.
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Box h="95vh">
        <VStack spacing={6} align="center">
          <Text fontSize="3xl" color="green" marginTop="3rem" as="b">
            Holistic Primary Care and Lifestyle Medicine
          </Text>
          <Text fontSize="xl" color="green">
            Parallel World Medicare members receive highly personalized care by
            doctors at the top of their fields
          </Text>
          <HStack spacing="4rem" w="70%" marginTop="1rem">
            <VStack spacing={4}>
              <Center>
                <Image src="about-1.png" />
              </Center>
              <Text fontSize="sm">
                <span style={{ fontWeight: "bold" }}>
                  Evidenced-based, proactive (not reactive) primary care
                </span>{" "}
                with an emphasis on lifestyle-based management strategies
              </Text>
            </VStack>
            <VStack spacing={4}>
              <Center>
                <Image src="about-2.png" />
              </Center>
              <Text fontSize="sm">
                <span style={{ fontWeight: "bold" }}>Focus on prevention</span>{" "}
                with recommendations to help prevent chronic disease
              </Text>
            </VStack>
            <VStack spacing={4}>
              <Center>
                <Image src="about-3.png" />
              </Center>
              <Text fontSize="sm">
                <span style={{ fontWeight: "bold" }}>
                  Acute illness management
                </span>{" "}
                providing comprehensive care from doctors who know you well
              </Text>
            </VStack>
          </HStack>
          <Text fontSize="sm">
            We at Parallel World Medicare know that lifestyle choices can
            contribute significantly to treatment and prevention of chronic
            illnesses.
          </Text>
          <Text fontSize="sm" as="b">
            Improving overall lifestyle habits is the first step toward getting
            and staying healthy.
          </Text>
        </VStack>
      </Box>
      <hr
        style={{
          backgroundColor: "black",
          border: "none",
          height: "2px",
          margin: "10px 0px",
        }}
      />
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left" color="green">
                    Comprehensive Cardiology Services
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box h="100vh">
                  <VStack
                    spacing={6}
                    align="center"
                    marginTop="2rem"
                    w="80%"
                    mx="auto"
                  >
                    <Text fontSize="3xl" as="b" color="green">
                      Comprehensive Cardiology Services
                    </Text>
                    <Text fontSize="xl" color="green" w="80%">
                      Parallel World Medicare offers its members cutting-edge
                      cardiology services including consultations, EKGs, stress
                      testing, and medical management
                    </Text>
                    <HStack spacing={4}>
                      <Image
                        src="https://rb.gy/p2pu5"
                        objectFit="contain"
                        w="40%"
                      ></Image>
                      <VStack align="center" spacing={4}>
                        <Text fontSize="sm">
                          Dr. Parks is a board-certified Cardiologist on the
                          faculty of Mass General Hospital and Newton Wellesley
                          Hospital, and she holds academic appointments at both
                          Harvard and Tufts. She has deep expertise all aspects
                          of Cardiology including preventive care, comprehensive
                          cardiovascular testing, and disease management. She is
                          also an expert in cardiac imaging and related
                          interpretations including the most advanced methods.
                          She can provide integrative cardiology care for
                          Synergy members including testing and management of
                          arrhythmias, heart failure, coronary artery disease,
                          and more.
                        </Text>
                        <Text fontSize="sm">
                          All our physicians have significant expertise in
                          cardiovascular disease prevention. We use the most
                          current and comprehensive blood tests available for
                          lipid (cholesterol) / lipoprotein analyses and
                          cardiovascular risk assessment, as well as
                          cutting-edge imaging studies (including CT calcium
                          scores, CT angiograms, etc). Synergy pairs that with
                          an integrative approach including plant-forward eating
                          and the full array of lifestyle management tools, in
                          addition to medications when necessary.
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {/* <hr
        style={{
          backgroundColor: "black",
          border: "none",
          height: "2px",
        }}
      /> */}
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _expanded={{ bg: "Red", color: "blue" }}>
                  <Box as="span" flex="1" textAlign="left" color="black">
                    Functional Medicine
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box h="100vh">
                  <VStack
                    spacing={6}
                    align="center"
                    marginTop="2rem"
                    w="80%"
                    mx="auto"
                  >
                    <Text fontSize="3xl" as="b" color="green">
                      Functional Medicine
                    </Text>
                    <Text fontSize="xl" color="green" w="80%">
                      Parallel World Medicare members work with their doctor to
                      address the underlying causes of disease and promote
                      optimal wellness
                    </Text>
                    <HStack spacing={4}>
                      <Image
                        src="https://rb.gy/8kbwj"
                        objectFit="contain"
                        w="40%"
                      ></Image>
                      <VStack align="center" spacing={4}>
                        <Text fontSize="sm">
                          Functional Medicine is a way of working with patients
                          to determine how and why illness occurs and to restore
                          health by addressing the root causes of disease for
                          each individual. It requires a detailed understanding
                          of each patient's genetic, biochemical, and lifestyle
                          factors.
                        </Text>
                        <Text fontSize="sm">
                          Functional medicine can be particularly helpful to
                          patients interested in treating or improving a
                          multitude of conditions including digestive disorders
                          (including IBS), fatigue, autoimmune disease, thyroid
                          disease including Hashimotos, and most chronic issues.
                        </Text>
                        <Text fontSize="sm">
                          Dr.Pardo, an Institute of Functional
                          Medicine-certified practitioner, offers a functional
                          medicine approach along with her traditional primary
                          care as part of a plan to help prevent chronic
                          diseases such as cardiovascular disease, brain
                          disorders (i.e. dementia), metabolic disease (i.e.
                          diabetes), and cancer.
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {/* <hr
        style={{
          backgroundColor: "black",
          border: "none",
          height: "2px",
        }}
      /> */}
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _expanded={{ bg: "green", color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" color="blue">
                    Parallel World Medicare Health Coaching
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box h="140vh">
                  <VStack
                    spacing={6}
                    align="center"
                    marginTop="2rem"
                    w="80%"
                    mx="auto"
                  >
                    <Text fontSize="3xl" as="b" color="green">
                      Parallel World Medicare Health Coaching
                    </Text>
                    <Text fontSize="xl" color="green" w="80%">
                      Parallel World Medicare members have health coaching with
                      our lifestyle medicine experts and board certified health
                      coaches.
                    </Text>
                    <VStack spacing={4}>
                      <Image
                        src="PWM-Private-Health-Coaching-Process.png"
                        objectFit="contain"
                        w="60%"
                      ></Image>
                      <Text fontSize="sm">
                        Our in-house health coaching supports members in taking
                        little steps to make big life changes. Skilled coaches
                        work directly and collaboratively with our clinical team
                        to provide more integrative care between you, your
                        coach, and your physician.
                      </Text>
                      <Text fontSize="sm">
                        The{" "}
                        <span style={{ color: "#088db2" }}>
                          health coaches at Parallel World Medicare are all
                          highly experienced and National Board-certified.
                        </span>{" "}
                        In this collaborative relationship, a coach partners
                        with you to help you create your desired behavioral and
                        habit changes using science-backed lifestyle
                        modification practices for sustained change.
                      </Text>
                      <Text fontSize="sm">
                        Each member will have an experience tailor-made to their
                        life and circumstances through personal reflections and
                        connecting with your authentic motivation. You won’t
                        have to worry about being given unrealistic or
                        prescriptive “quick fixes” that don’t stick.
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {/* <hr
        style={{
          backgroundColor: "black",
          border: "none",
          height: "2px",
        }} 
      />*/}
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _expanded={{ bg: "purple", color: "orange" }}>
                  <Box as="span" flex="1" textAlign="left" color="tomato">
                    Wellness Programs and Culinary Medicine
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box h="170vh">
                  <VStack
                    spacing={6}
                    align="center"
                    marginTop="2rem"
                    w="80%"
                    mx="auto"
                  >
                    <Text fontSize="3xl" as="b" color="green">
                      Wellness Programs and Culinary Medicine
                    </Text>
                    <Text fontSize="xl" color="green" w="80%">
                      Parallel World Medicare members have access to a number of
                      premium wellness offerings including content curated by
                      our industry-leading experts.
                    </Text>
                    <HStack spacing={4} align="start">
                      <Image
                        src="https://rb.gy/p1lml"
                        objectFit="contain"
                        w="40%"
                      ></Image>
                      <VStack align="start" spacing={4}>
                        <Text fontSize="sm">
                          Equipped with our Synergy Rx full teaching kitchen and
                          event space, Members enjoy our novel Culinary Medicine
                          program and Food-as-Medicine curriculum in addition to
                          a full array of Wellness events and topics.
                        </Text>
                        <Text fontSize="sm">
                          Curated by our top industry experts, our
                          evidence-based{" "}
                          <span style={{ fontWeight: "bold" }}>
                            holistic health education topics have included
                            breath-as-medicine, tai chi, metabolic health,
                            introduction to herbalism, stress resilience,
                            food-as-medicine for hormonal balance, and much
                            more.
                          </span>
                        </Text>
                        <Text fontSize="sm">
                          Culinary Medicine is a practice that incorporates the
                          science of medicine and the art of food and cooking to
                          create an individualized approach to food choices.
                          There is robust evidence showing that many chronic
                          diseases can be prevented or improved with simple
                          dietary changes. Through our{" "}
                          <span style={{ fontWeight: "bold" }}>
                            Culinary Medicine program including live
                            demonstrations and virtual/asynchronous programs,
                          </span>{" "}
                          Members learn how to understand the value of food and
                          cooking, and how certain foods contribute to chronic
                          disease and wellbeing. We provide a simple approach to
                          bringing delicious, health-promoting foods into daily
                          life.
                        </Text>
                        <Text fontSize="sm">
                          Members may attend classes, receive monthly
                          food-as-medicine recipes, participate in
                          demonstrations by experts, read our high-impact
                          newsletter, and have exclusive access to our{" "}
                          <span style={{ fontWeight: "bold" }}>
                            full library of content via our Members Archive
                            including education resources and tip sheets
                          </span>
                        </Text>
                        <Text fontSize="sm">
                          <span style={{ fontWeight: "bold" }}>
                            Exclusive wellness-topic-focused events
                          </span>{" "}
                          often feature renowned guests across field such as
                          Sleep Medicine, Pranayama, and Tai Chi. Parallel World
                          Medicare guest presenters have included:
                        </Text>
                        <UnorderedList>
                          <ListItem>
                            <Text fontSize="sm" as="b">
                              Dr. William Li | “Eat to Beat Disease”
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text fontSize="sm" as="b">
                              Dr. Drew Ramsey and the Mental Fitness Kitchen
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text fontSize="sm" as="b">
                              Dr. Uma Naidoo | "This is Your Brain on Food"
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text fontSize="sm" as="b">
                              Ramel Rones Tai Chi
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text fontSize="sm" as="b">
                              Dr. Amit Anand | Pranayama Rx
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      {/* <hr
        style={{
          backgroundColor: "black",
          border: "none",
          height: "2px",
        }}
      /> */}
    </section>
  );
}
