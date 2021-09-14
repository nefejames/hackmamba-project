import {
  Box,
  Flex,
  IconButton,
  Collapse,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "@svgs/Logo";
import { useUser } from "@auth0/nextjs-auth0";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import DesktopHeader from "./components/DesktopHeader/";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box borderBottom={1} borderStyle={"solid"} borderColor="gray.900">
      <Flex minH={"60px"} py={{ base: 2 }} align={"center"}>
        {/* nav content flex */}
        <Flex flex={{ base: 1 }} justify={{ base: "center" }}>
          <Logo />

          <Spacer />
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopHeader />
          </Flex>
        </Flex>

        {/* icon button flex */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justify="end"
        >
          <IconButton
            onClick={onToggle}
            size="sm"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileHeader />
      </Collapse>
    </Box>
  );
}
