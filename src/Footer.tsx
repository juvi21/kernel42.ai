import { Box, Flex, Text, Link, VStack, Spacer, Icon } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      color="white"
      py={6}
      px={8}
      backgroundImage="url('footer.jpg')" // Add your image path here
      backgroundSize="cover" // This ensures the image covers the entire footer
      backgroundPosition="center" // Centers the image
      backgroundRepeat="no-repeat" // Ensures the image doesn't repeat
      borderTop="2px solid black"
    >
      <Flex
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
      >
        <VStack spacing={2} align="start">
          <Text fontWeight="bold" fontSize="lg">
            Kernel42.ai
          </Text>
          <Text>123 Street, Duesseldorf, Germany</Text>
          <Text>Email: contact@kernel42.ai</Text>
          <Text>Phone: +123 456 789</Text>
        </VStack>

        <Spacer />

        <VStack spacing={2} align="start">
          <Text fontWeight="bold" fontSize="lg">
            Links
          </Text>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </VStack>

        <Spacer />

        <VStack spacing={2} align="start">
          <Text fontWeight="bold" fontSize="lg">
            Connect
          </Text>
          <Flex>
            <Link href="#" mx={1}>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="#" mx={1}>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="#" mx={1}>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
          </Flex>
        </VStack>
      </Flex>

      <Box textAlign="center" mt={6}>
        <Text>
          &copy; {new Date().getFullYear()} Kernel42. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
