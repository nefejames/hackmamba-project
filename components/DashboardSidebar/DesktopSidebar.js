import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import FullNavLink from "./FullNavLink";
import IconNavLink from "./IconNavLink";
import { useSidebarAuth } from "@context/sidebarContext";
import { RiAdminFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useUser } from "@auth0/nextjs-auth0";

export default function Sidebar() {
  const router = useRouter();
  const { isOpen } = useSidebarAuth();
  const { user } = useUser();
  const NavAction = isOpen ? IconNavLink : FullNavLink;

  return (
    <Stack
      layerStyle="card"
      w={isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      h="90vh"
      spacing={2}
      fontSize="sm"
      display={["none", null, "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      pos="sticky"
      top="10vh"
      bg="gray.900"
    >
      <NavAction
        active={router.pathname === "/"}
        name="Home"
        href="/"
        icon={IoHomeSharp}
      />

      {user && (
        <NavAction
          active={router.pathname === "/app"}
          name="Dashboard"
          href="/app"
          icon={RiAdminFill}
        />
      )}
    </Stack>
  );
}
