import { Box, Heading, Text, Flex, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";

const MotionStack = motion(Stack);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const slideUpForHeading = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideOverText = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
};

const Headline = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      as="section"
      py={20}
      px={10}
      borderBottom="2px solid black"
      position="relative"
      height="100vh"
    >
      {/* Background Image */}
      <MotionImage
        src="/landing.jpg"
        fit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        alt="Background Image"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <Flex
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        marginTop={["-10%", "-12%", "-15%"]}
      >
        <MotionStack
          spacing={6}
          alignItems="center"
          variants={slideUpForHeading}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Heading as="h1" size="2xl" color="white">
            Foundation Models for Europe
          </Heading>

          <MotionText
            fontSize="xl"
            color="white"
            textAlign="center"
            maxWidth="xl"
            px={2}
            py={0.3} // <-- Adjusted this value
            variants={slideOverText}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Finetune European housemade foundation models customized for your
            business needs.
          </MotionText>
        </MotionStack>
      </Flex>
    </Box>
  );
};

export default Headline;
