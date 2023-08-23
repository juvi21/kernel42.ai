import {
  Box,
  Heading,
  Text,
  Center,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Convert Chakra UI components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.6 } },
};

const Mission: React.FC = () => {
  const bgColor = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <MotionBox
      bg={bgColor}
      borderRadius="lg"
      p={8}
      borderColor={borderColor}
      my={6}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Center flexDirection="column">
        <VStack spacing={5}>
          <MotionHeading
            as="h2"
            size="xl"
            color={textColor}
            variants={textVariants}
          >
            Our Mission
          </MotionHeading>
          <MotionText
            color={textColor}
            textAlign="center"
            variants={textVariants}
            px={["5%", "10%"]}
          >
            We're a group of enthusiasts navigating the vast world of artificial
            intelligence. Our goal isn't just to provide solutions, but to
            create AI tools that fit varied business needs. We believe in the
            potential of AI and its ability to enrich our digital experiences.
            With a genuine respect for open-source principles, we hope to one
            day train our own foundational models, seeking a path that remains
            true to our values. In an age where data is everywhere, we're
            committed to upholding the European Union's rigorous data policies,
            ensuring that our work is not only innovative but also respectful of
            ethical standards. If you'd like to learn more about our journey and
            plans, please visit our Roadmap
          </MotionText>
        </VStack>
      </Center>
    </MotionBox>
  );
};

export default Mission;
