import NextLink from "next/link";
import { Flex, Spacer, Stack, Button, Link } from "@chakra-ui/react";
import SidebarToggleButton from "./components/SidebarToggleButton";
import { useUser } from "@auth0/nextjs-auth0";
import Logo from "@svgs/Logo";

export default function DashboardHeader() {
  const { user } = useUser();

  return (
    <Flex
      bg="gray.900"
      h="10vh"
      minH="70px"
      alignItems="center"
      p={5}
      pos="sticky"
      top="0"
      zIndex="2"
    >
      <Stack direction="row" w="full" alignItems="center" spacing="8">
        <NextLink href="/" rel="noopener noreferrer" target="_blank">
          <a>
            <Logo />
          </a>
        </NextLink>
        <SidebarToggleButton />

        <Spacer />

        {user && (
          <Link href="/api/auth/logout">
            <Button bg="blue.700" _hover={{ bg: "blue.900" }}>Logout</Button>
          </Link>
        )}
      </Stack>
    </Flex>
  );
}
