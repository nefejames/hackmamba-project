import NextLink from "next/link";
import { Box, Flex, Button } from "@chakra-ui/react";
import Logo from "@svgs/Logo";
import { useUser } from "@auth0/nextjs-auth0";

export default function HomeHeader() {
  const { user, isLoading } = useUser();

  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        align={"center"}
        borderStyle={"solid"}
        bg="gray.800"
        color="white"
        borderColor="gray.900"
      >
        <Flex flex={{ base: 1 }} justify="start">
          <Logo />
        </Flex>

        {!isLoading && !user && (
          <NextLink href="/api/auth/login" passHref>
            <Button as="a" bg="blue.700" _hover={{ bg: "blue.900" }}>
              Sign In/Log in
            </Button>
          </NextLink>
        )}

        {user && (
          <NextLink href="/api/auth/logout" passHref>
            <Button as="a" bg="blue.700" _hover={{ bg: "blue.900" }}>
              Logout
            </Button>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
}
