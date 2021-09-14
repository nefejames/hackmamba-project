import NextLink from "next/link";

import { Stack, Button } from "@chakra-ui/react";
import MobileHeaderItem from "./MobileHeaderItem";
import { useUser } from "@auth0/nextjs-auth0";
import routes from "../../routes";

export default function MobileHeader() {
  const { user, isLoading } = useUser();

  return (
    <Stack bg="gray.800" p={4} display={{ md: "none" }}>
      {routes.map((route) => (
        <MobileHeaderItem key={route.label} {...route} />
      ))}

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
    </Stack>
  );
}
