import {
  Box,
  Grid,
  Heading,
  Text,
  Center,
  Image,
  Flex,
  Container,
} from "@chakra-ui/react";
import Testimonial from "./Testimonial";

const TestimonialsContainer: React.FC = () => {
  // Sample data
  const testimonials = [
    {
      text: "Short description about yourself",
      author: "Adrian Beck",
      role: "CTO, Kernel42.ai",
      avatarUrl: "https://example.com/path/to/avatar1.jpg",
      linkedInUrl: "https://www.linkedin.com",
    },
    {
      text: "Short description about yourself",
      author: "Gal Wu",
      role: "CEO, Kernel42.ai",
      avatarUrl: "https://example.com/path/to/avatar2.jpg",
      linkedInUrl: "https://www.linkedin.com",
    },
    {
      text: "Short description about yourself",
      author: "Gal Wu",
      role: "CEO, Kernel42.ai",
      avatarUrl: "https://example.com/path/to/avatar2.jpg",
      linkedInUrl: "https://www.linkedin.com",
    },
    {
      text: "Short description about yourself",
      author: "Gal Wu",
      role: "CEO, Kernel42.ai",
      avatarUrl: "https://example.com/path/to/avatar2.jpg",
      linkedInUrl: "https://www.linkedin.com",
    },
  ];

  return (
    <Box p={0} borderTop={["2px solid black", "2px solid black"]}>
      <Container maxW="full">
        <Center flexDirection="column" mb={6} px={["5%", "10%"]}>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            width="100vw" // Full viewport width
            mb={4}
            borderRadius="0"
            overflow="hidden"
            borderBottom="2px solid black"
          >
            <Image
              src="talent.jpg" // replace with your image path
              alt="Background Image"
              width="100%"
              objectFit="cover"
              objectPosition="center"
            />
            <Heading position="absolute" mb={8} color="white">
              Who we are
            </Heading>
          </Flex>
          <Text fontSize="sm" color="gray.600" textAlign="center" mb={4}>
            Picture taken at kernel42.ai headquarters
          </Text>
        </Center>
      </Container>

      <Container maxW="container.xl" px={20}>
        <Center flexDirection="column" mb={6}>
          <Box p={3} mb={6}>
            <Text color="gray.700">
              At 42kernel, we are a collective of curious minds, each bringing a
              unique set of experiences to the fore. Comprising hacker-minded
              engineers, we have excelled in competitive environments such as
              Capture-the-Flag, Competitive Programming, and Math competitions.
              We firmly believe that AI, at its core, is an engineering
              challenge. Our aspiration is to ensure that these powerful models
              are not only accessible to everyone but also developer-friendly.
              Integral to our ethos is a strong commitment to open source,
              fostering a culture of collaboration and shared knowledge. The
              team is deeply dedicated to ensuring AI safety and alignment.
              Furthermore, many among us boast backgrounds in AI Alignment
              Research.
            </Text>
          </Box>
        </Center>

        <Grid templateColumns={["1fr", "1fr 1fr"]} gap={6}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.author + index} // Use a more unique key
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
              linkedInUrl={testimonial.linkedInUrl}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsContainer;
