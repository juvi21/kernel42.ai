import * as React from "react";
import { ChakraProvider, Box, Text, Spacer } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "./Header";
import Headline from "./Headline";
import Roadmap from "./components/Roadmap";
import TestimonialContainer from "./components/TestimonialsContainer";

const theme = extendTheme({
  fonts: {
    body: "Fira Code, sans-serif",
    heading: "Fira Code, sans-serif",
    mono: "Fira Code, monospace",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box p={8}></Box>
      <Headline />

      <Roadmap />

      <Box p={6}></Box>
      <TestimonialContainer />
    </ChakraProvider>
  );
}

export default App;
