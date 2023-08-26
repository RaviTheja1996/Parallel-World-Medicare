import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  AbsoluteCenter,
  Heading,
  HStack,
  VStack,
  Box,
  Spacer,
  Center,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faRegistered } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <section id="footer" style={{ marginTop: "4rem" }}>
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" color="#084560" w="90%">
          <GridItem bg="#f8f8f8" p="4rem">
            <VStack spacing={4} align="start">
              <Heading as="b">Parallel World Medicare</Heading>
              <Text fontSize="xs">
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2023
                Parallel World Medicare Inc. All rights reserved.
              </Text>
              <Text fontSize="xs">Legal Information</Text>
              <Text fontSize="xs">
                Parallel World Medicare{" "}
                <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon> and
                WordPress{" "}
                <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon> are
                registered trademarks.
              </Text>
            </VStack>
            <VStack align="start" style={{ marginTop: "4rem" }} spacing={4}>
              <Heading fontSize="2xl">Follow Us</Heading>
              <Flex justify="space-between" w="70%">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="orange"
                ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faYoutube} color="red"></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="blue"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="blue"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="blue"
                ></FontAwesomeIcon>
              </Flex>
            </VStack>
          </GridItem>
          <GridItem>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              p="3rem"
              gap={6}
              marginTop="2rem"
              marginLeft="2rem"
            >
              <GridItem>
                <VStack spacing={4} align="start">
                  <Heading fontSize="2xl">Resources</Heading>
                  <Text fontSize="xs">Free Ebooks</Text>
                  <Text fontSize="xs">Learn WordPress</Text>
                  <Text fontSize="xs">Parallel world blog</Text>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Heading fontSize="2xl">Learn More</Heading>
                  <Text fontSize="xs">About Us</Text>
                  <Text fontSize="xs">Subscribe</Text>
                  <Text fontSize="xs">Contact Us</Text>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start" marginTop="1rem">
                  <Heading fontSize="2xl">What We do</Heading>
                  <Text fontSize="xs">Countries</Text>
                  <Text fontSize="xs">procurement</Text>
                  <Text fontSize="xs">feature</Text>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start" marginTop="1rem">
                  <Heading fontSize="2xl">Get Support</Heading>
                  <Text fontSize="xs">support form</Text>
                  <Text fontSize="xs">Documentation</Text>
                  <Text fontSize="xs">FAQ</Text>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Center>
    </section>
  );
};
