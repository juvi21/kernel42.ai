// Testimonial.tsx
import {
  Box,
  Flex,
  Text,
  Avatar,
  useColorModeValue,
  ScaleFade,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  avatarUrl: string;
  linkedInUrl: string; // New property for LinkedIn URL
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  role,
  avatarUrl,
  linkedInUrl,
}) => {
  const bgColor = useColorModeValue("#FAF5EA", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("black", "white");

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <LinkBox as="article">
        <Box
          borderRadius="0"
          boxShadow="md"
          p={6}
          bg={bgColor}
          px={["5%", "10%"]}
          border="2px solid"
          borderColor={borderColor}
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            cursor: "pointer",
          }}
        >
          <LinkOverlay
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </LinkOverlay>
        </Box>
      </LinkBox>
    </ScaleFade>
  );
};

export default Testimonial;
