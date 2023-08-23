import { Box, Grid, Heading, Text, Center } from "@chakra-ui/react";
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
    <Box p={0} px={20}>
      <Center flexDirection="column" mb={6} px={["5%", "10%"]}>
        <Heading mb={8}>Talent</Heading>
        <Box borderWidth="2px" borderColor="black" p={3} mb={6}>
          <Text color="gray.700">
            We gathered great Talent too 42kernel. We are a group of Hacker
            minded Engineers who have done highly in competitive environments
            such as Capture-the-flag, Competitive Programming and
            Math-competitons. We believe AI is fundamentally an engineering
            Problem. We want to make sure everyone can use these powerful models
            easily, and developer-friendly. The team is fundamentally interested
            in making AI safe and well-aligned. Many of us have backgrounds in
            AI Alignment Research.
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
    </Box>
  );
};

export default TestimonialsContainer;
