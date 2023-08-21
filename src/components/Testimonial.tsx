import { Box, Flex, Text, Avatar, Spacer, useColorModeValue } from '@chakra-ui/react';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, role, avatarUrl }) => {
  const bgColor = useColorModeValue("#FAF5EA", "gray.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box borderRadius="lg" boxShadow="md" p={6} bg={bgColor}>
      <Text color={textColor} fontStyle="italic" mb={4}>
        "{text}"
      </Text>
      <Flex alignItems="center">
        <Avatar src={avatarUrl} size="sm" />
        <Box ml={3}>
          <Text fontWeight="bold" color={textColor}>
            {author}
          </Text>
          <Text fontSize="sm" color={textColor}>
            {role}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonial;