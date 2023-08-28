import { Carousel } from "react-responsive-carousel";
import { Text, HStack, AbsoluteCenter, Spacer, Flex } from "@chakra-ui/react";
import "../style_modules/ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const { c1, c2, c3 } = { ...images };
  return (
    <Carousel showThumbs={false}>
      <div className="carousel">
        <Flex
          w="100%"
          h={{ base: "80vh", lg: "60vh", md: "80vh" }}
          gap={4}
          direction={{ lg: "row", md: "column", base: "column" }}
        >
          <img src={c1} alt="Img 1" />
          <Text fontSize="sm" as="b">
            I am thrilled to share my incredibly positive experience with
            Parallel World Medicare! This healthcare website has truly
            transformed the way I approach my medical needs. From the
            user-friendly interface that makes navigating the complexities of
            healthcare a breeze, to the wealth of comprehensive information
            about different medical conditions and treatment options, Parallel
            World Medicare has exceeded all my expectations.
          </Text>
        </Flex>
      </div>
      <div className="carousel">
        <Flex
          w="100%"
          h={{ base: "80vh", lg: "60vh", md: "80vh" }}
          gap={4}
          direction={{ lg: "row", md: "column", base: "column" }}
        >
          <img src={c3} alt="Img 2" />
          <Text fontSize="sm" as="b">
            At Parallel World Medicare, our team of doctors is unparalleled in
            their expertise, compassion, and dedication to patient well-being.
            Each doctor is meticulously selected based on their exceptional
            medical credentials, years of practical experience, and a genuine
            commitment to providing the highest level of care. Our diverse
            roster of doctors spans various specialties and fields, ensuring
            that every patient can find the right medical professional to
            address their unique needs.
          </Text>
        </Flex>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
