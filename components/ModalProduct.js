import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function ModalProduct({ isOpen, onClose, modalData }) {
  const { img, title, price } = modalData || {};
  const toast = useToast();

  console.log(modalData);

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
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Product Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Image
              src={img}
              h={[40, 60, 80, 150, 300]}
              w="full"
              objectFit="cover"
              roundedTop="lg"
              placeholder="blur"
            />

            <Box pt="3">
              <Box
                mt="3"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {title}
              </Box>
              ${price}
              <Box as="span" color="gray.600" fontSize="sm">
                {" "}
                / month
              </Box>
            </Box>
          </Box>
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
  );
}
