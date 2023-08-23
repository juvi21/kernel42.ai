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
            At kernel42.ai, our primary goal is to revolutionize the AI industry
            by providing state-of-the-art solutions tailored to individual
            business needs. We believe in the transformative power of AI and its
            potential to elevate every aspect of our digital world. Our mission
            is to make advanced AI technologies accessible, understandable, and
            actionable for businesses of all sizes.
          </MotionText>
        </VStack>
      </Center>
    </MotionBox>
  );
};

export default Mission;
