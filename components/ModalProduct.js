import { Box, Image } from "@chakra-ui/react";

export default function ModalProduct({ img, title, price }) {
  return (
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
  );
}
