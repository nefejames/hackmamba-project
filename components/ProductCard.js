import {
  Box,
  Flex,
  Image,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ModalProduct from "./ModalProduct";
export default function ProductCard(props) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalClose = () => {
    toast({
      title: "Purchase successsful.",
      description: "One more happy pet.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      layerStyle="card"
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      {/* ! passing props to Content component twice. bad code. fix */}
      <Content onClick={onOpen} {...props} />
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Product Details</ModalHeader>
          <ModalBody>
            <ModalProduct {...props} />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              w="200px"
              size="lg"
              onClick={handleModalClose}
            >
              Purchase
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

const Content = ({
  id,
  img,
  beds,
  baths,
  title,
  price,
  score,
  reviewCount,
  onClick,
}) => {
  return (
    <Box
      // bg={useColorModeValue("white", "gray.800")}
      w="full"
      h="full"
      borderWidth="1px"
      rounded="lg"
      // borderRadius="lg"
      shadow="lg"
      onClick={onClick}
    >
      <Image
        src={img}
        h={[40, 60, 80, 150, 200]}
        w="full"
        objectFit="cover"
        roundedTop="lg"
        placeholder="blur"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {beds} beds &bull; {baths} baths
          </Box>
        </Box>

        <Box
          mt="3"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          ${price}
          <Box as="span" color="gray.600" fontSize="sm">
            {" "}
            / month
          </Box>
        </Box>

        <Box d="flex" mt="3" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < score ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
