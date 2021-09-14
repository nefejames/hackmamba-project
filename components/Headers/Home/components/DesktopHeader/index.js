import NextLink from "next/link";
import { Stack, Box, Link, Button } from "@chakra-ui/react";
import Logo from "@svgs/Logo";
import { useUser } from "@auth0/nextjs-auth0";
import routes from "../../routes";

export default function DesktopHeader() {
  const { user, isLoading } = useUser();

  return (
    <Stack direction={"row"} spacing={4}>
      {routes.map((route) => (
        <Box key={route.label}>
          <Link
            href={route.href ?? "#"}
            fontSize={"md"}
            fontWeight={500}
            color="gray.200"
            _hover={{
              color: "white",
            }}
          >
            <NextLink href={route.href ?? "#"}>
              <a>{route.label}</a>
            </NextLink>
          </Link>
        </Box>
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
