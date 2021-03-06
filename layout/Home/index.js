import { Box, Container } from "@chakra-ui/react";
import HomeNavbar from "@components/Headers/Home";

export default function HomeLayout({ children }) {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <HomeNavbar />

        {children}
      </Container>
    </Box>
  );
}
