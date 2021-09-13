import { useRouter } from "next/router";
import { Flex, Spacer, Stack, Button, Link } from "@chakra-ui/react";
import { Logo, SidebarToggleButton, ThemeToggleButton } from "./components";
import { useUser } from "@auth0/nextjs-auth0";

export default function Header() {
  const router = useRouter();
  // const { user, isLoading } = useUser();

  return (
    <Flex
      // layerStyle="card"
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      bg="gray.900"
      h="10vh"
      minH="70px"
      alignItems="center"
      p={5}
      pos="sticky"
      top="0"
      zIndex="2"
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <Logo display={["none", , "flex"]} />
        <SidebarToggleButton />

        <Spacer />

        {/* {!isLoading && !user && (
          <Link href="/api/auth/login">
            <Button>Login to add your listing</Button>
          </Link>
        )} */}

        {/* {user && (
          <Link href="/api/auth/logout">
            <Button>Logout</Button>
          </Link>
        )} */}

        <Spacer />

        <ThemeToggleButton />
      </Stack>
    </Flex>
  );
}
