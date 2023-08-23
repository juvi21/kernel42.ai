import { Box, Flex, Text, Link, VStack, Icon } from "@chakra-ui/react";
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
      py={[4, 6]}
      px={[4, 8]}
      backgroundImage="url('footer.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderTop="2px solid black"
    >
      <Flex
        direction={["column", "row"]}
        alignItems="start" // Ensures alignment at the start
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
        mb={4}
      >
        <VStack spacing={2} align="start" mb={[4, 0]}>
          {" "}
          <Text fontWeight="bold" fontSize={["md", "lg"]}>
            Kernel42.ai
          </Text>
          <Text fontSize={["sm", "md"]}>123 Street, Duesseldorf, Germany</Text>
          <Text fontSize={["sm", "md"]}>Email: contact@kernel42.ai</Text>
          <Text fontSize={["sm", "md"]}>Phone: +123 456 789</Text>
        </VStack>

        <VStack spacing={2} align="start" mb={[4, 0]}>
          {" "}
          <Text fontWeight="bold" fontSize={["md", "lg"]}>
            Links
          </Text>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </VStack>

        <VStack spacing={2} align="start">
          <Text fontWeight="bold" fontSize={["md", "lg"]}>
            Connect
          </Text>
          <Flex>
            <Link href="#" mx={1}>
              <Icon as={FaTwitter} w={5} h={5} />
            </Link>
            <Link href="#" mx={1}>
              <Icon as={FaGithub} w={5} h={5} />
            </Link>
            <Link href="#" mx={1}>
              <Icon as={FaLinkedin} w={5} h={5} />
            </Link>
          </Flex>
        </VStack>
      </Flex>

      <Box textAlign="center" mt={4}>
        <Text fontSize={["xs", "sm"]}>
          &copy; {new Date().getFullYear()} Kernel42. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
