import { Box } from "@chakra-ui/react";

export default function Page({ children }) {
  return (
    <Box w="full" p={4} bg="grey.900">
      {children}
    </Box>
  );
}
