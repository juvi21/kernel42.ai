import { Box, Heading, Text, Center, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionStack = motion(Stack);
const MotionText = motion(Text);

const slideUpForHeading = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideOverText = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }, // delay adjusted since we removed the image
};

const Headline = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animations only once
    threshold: 0.1, // Percentage of element visible before triggering
  });

  return (
    <Box
      ref={ref}
      as="section"
      bg="white"
      py={20}
      px={10}
      borderBottom="2px solid black"
    >
      <Center>
        <MotionStack
          spacing={6}
          alignItems="center"
          variants={slideUpForHeading}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Heading as="h1" size="2xl" color="black">
            Foundation Models for Europe
          </Heading>

          <MotionText
            fontSize="xl"
            color="gray.600"
            textAlign="center"
            maxWidth="xl"
            variants={slideOverText}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Finetune European housemade foundation models customized for your
            business needs.
          </MotionText>
        </MotionStack>
      </Center>
    </Box>
  );
};

export default Headline;
