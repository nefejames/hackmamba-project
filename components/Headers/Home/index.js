import NextLink from "next/link";
import { Box, Flex, Button, Stack } from "@chakra-ui/react";
import Logo from "@svgs/Logo";
import { useUser } from "@auth0/nextjs-auth0";

export default function HomeNavbar() {
  const { user, isLoading } = useUser();

  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        align={"center"}
        borderStyle={"solid"}
        // bg={useColorModeValue("white", "gray.800")}
        // color={useColorModeValue("gray.600", "white")}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        bg="gray.800"
        color="white"
        borderColor="gray.900"
      >
        <Flex flex={{ base: 1 }} justify="start">
          <Logo />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {!isLoading && !user && (
            <NextLink href="/api/auth/login" passHref>
              <Button as="a">Sign In/Log in</Button>
            </NextLink>
          )}

          {user && (
            <NextLink href="/api/auth/logout" passHref>
              <Button as="a">Logout</Button>
            </NextLink>
          )}

          {/* <Link
            as={"button"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/api/auth/login"}
          >
            Sign In/Log in
          </Link> */}

          {/* <Button
            fontWeight={"600"}
            fontSize={"sm"}
            color={"#111"}
            bg={"white"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Logout
          </Button> */}
        </Stack>
      </Flex>
    </Box>
  );
}
