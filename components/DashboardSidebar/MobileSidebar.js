import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Stack,
  Link,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import FullNavLink from "./FullNavLink";
import { RiAdminFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";

import { useUser } from "@auth0/nextjs-auth0";

import { useSidebarAuth } from "@context/sidebarContext";

export default function MobileSidebar() {
  const router = useRouter();
  const { isOpen, onClose } = useSidebarAuth();
  const { user } = useUser();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, []);
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay display={["initial", , "none"]}>
        <DrawerContent layerStyle="neutral" py={12} bg="gray.900">
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />
            <FullNavLink
              active={router.pathname === "/"}
              name="Home"
              href="/"
              icon={IoHomeSharp}
            />
            {user && (
              <FullNavLink
                active={router.pathname === "/app"}
                name="Dashboard"
                href="/app"
                icon={RiAdminFill}
              />
            )}
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
