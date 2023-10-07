import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Dostosuj kolorystykę, czcionki i inne właściwości
});

function ChakraWrapper({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
