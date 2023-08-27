import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  useDisclosure,
  Text,
  ModalHeader,
  ModalFooter,
  Divider,
  Center,
  Spacer,
} from "@chakra-ui/react";

function DoctorCard({ id, image, name, experience, specialization }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      spacing={4}
      align="start"
      border="1px solid black"
      p={4}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "5%",
        backgroundColor: "#9BF2F7",
      }}
    >
      <Image src={image} borderRadius="5%" />
      <Divider />
      <Text>
        <span style={{ fontWeight: "bold" }}>Doctor name :</span> {name}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Experience :</span> {experience}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Specialization :</span>{" "}
        {specialization}
      </Text>
      <Divider />

      <Button
        variant="solid"
        colorScheme="gray"
        onClick={onOpen}
        style={{ margin: "auto" }}
      >
        View in Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg="#63E26C">
          <ModalHeader style={{ margin: "auto", marginTop: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>Doctor name : {name}</span>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left" spacing={4}>
              <Image src={image} alt={name} borderRadius="5%" />
              <Spacer />
              <Text>
                <span style={{ fontWeight: "bold" }}>Doctor name :</span> {name}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold" }}>Experience :</span>{" "}
                {experience}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold" }}>Specialization :</span>{" "}
                {specialization}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default DoctorCard;
