import { useMediaQuery, Box, Stack } from "@chakra-ui/react";
import Header from "@components/Headers/Dashboard/";
import Page from "./Page";
import { DesktopSidebar, MobileSidebar } from "@components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box w="full">
      <Header />
      <Box pos="relative" h="max-content">
        <Stack direction="row" spacing={{ md: 5 }}>
          <DesktopSidebar />
          {isSmallScreen && <MobileSidebar />}
          <Page>{children}</Page>
        </Stack>
      </Box>
    </Box>
  );
}
