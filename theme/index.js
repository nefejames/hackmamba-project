import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { overrides } from "./overrides";
import Fonts from "./foundations/fonts";
// const theme = extendTheme(overrides);

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function Theme({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      {children}
    </ChakraProvider>
  );
}
