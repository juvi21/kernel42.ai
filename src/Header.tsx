import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Spacer,
  Link,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import PixelGlasses from "./components/PixelGlasses";

const Header = () => {
  const [isWideScreen] = useMediaQuery("(min-width: 768px)");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // If scrolling up, show the header
      if (currentScrollTop < lastScrollTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // If scrolling down, hide the header
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Flex
      as="header"
      width="100%"
      padding="1rem"
      boxShadow="md"
      alignItems="center"
      bg="#FAF5EA"
      borderBottom="2px solid black"
      position="fixed"
      top="0"
      zIndex="1000"
      transition="all 0.3s" // smooth transition for hiding and showing
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
    >
      {/* Logo or Company Name */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" color="black">
          Kernel42.ai
        </Text>
      </Box>

      <Spacer />

      {isWideScreen && <PixelGlasses />}

      <Spacer />

      {isWideScreen && (
        <Stack direction="row" spacing={4}>
          <Link
            href="#"
            color="black"
            fontSize="17"
            fontWeight="bold"
            _hover={{ color: "#f9e7c0" }}
            paddingRight={5}
          >
            About
          </Link>
        </Stack>
      )}

      <Box>
        <Button
          colorScheme="gray"
          variant="outline"
          size="md"
          borderColor="black"
          borderWidth="2px"
          _hover={{ bg: "#f9e7c0" }}
        >
          Dive In
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
