import { Icon, IconButton } from "@chakra-ui/react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useSidebarAuth } from "@context/sidebarContext";

export default function NavToggleButton() {
  const { onToggle, isOpen } = useSidebarAuth();
  const icon = isOpen ? CgClose : CgMenu;

  return (
    <IconButton
      size="sm"
      fontSize="lg"
      variant="ghost"
      onClick={onToggle}
      colorScheme="brand"
      icon={<Icon as={icon} />}
      aria-label="Toggle Actions"
      transition="all .4s ease-in-out"
    />
  );
}
