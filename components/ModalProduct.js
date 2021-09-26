import {
  Box,
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
import { Video } from "cloudinary-react";

export default function ModalProduct({ isOpen, onClose, modalData }) {
  const { title, price, video } = modalData || {};
  const toast = useToast();

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
        <ModalHeader>Pet Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Video controls publicId={video} />

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
