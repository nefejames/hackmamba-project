import { createContext, useContext } from "react";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";

const SidebarContext = createContext(null);
export const useSidebarAuth = () => useContext(SidebarContext);

export default function SidebarContextProvider({ children }) {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <SidebarContext.Provider value={sidebarState}>
      {children}
    </SidebarContext.Provider>
  );
}
