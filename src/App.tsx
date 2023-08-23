import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "./Header";
import Headline from "./Headline";
import Roadmap from "./components/Roadmap";
import TestimonialContainer from "./components/TestimonialsContainer";
import Mission from "./Mission";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Mission />

      <TestimonialContainer />
      <Box p={8}></Box>

      <Roadmap />

      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
