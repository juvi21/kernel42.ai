import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const roadmapPoints = [
  {
    date: "2023 Q1",
    heading: "Launch",
    description: "Release of Alpha Version",
  },
  {
    date: "2023 Q2",
    heading: "Testing",
    description: "Start of Beta Testing",
  },
  {
    date: "2023 Q3",
    heading: "Release",
    description: "Official Release to the Public",
  },
  {
    date: "2023 Q4",
    heading: "Release",
    description: "Official Release to the Public",
  },
  {
    date: "2024 Q1",
    heading: "Release",
    description: "Official Release to the Public",
  },
];

const Roadmap: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      background="url('roadmap4.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      p={8}
      borderTop="2px solid black"
      borderBottom={"2px solid black"}
    >
      <MotionHeading
        mb={8}
        color="white"
        textAlign="center"
        paddingTop={20}
        as="h2"
        size="2xl"
      >
        Roadmap
      </MotionHeading>
      <MotionFlex direction="column" alignItems="center">
        {roadmapPoints.map((item, idx) => (
          <MotionFlex
            key={idx}
            direction="column"
            alignItems="center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            mb={8}
            w="100%"
            px={8}
          >
            <MotionText
              color="white"
              fontWeight="bold"
              fontSize="xl"
              backgroundColor="rgba(182, 62, 120, 0.9)"
              px={2}
              py={0.3}
            >
              {item.date}
            </MotionText>
            <MotionText
              color="white"
              fontWeight="bold"
              fontSize="lg"
              mt={2}
              backgroundColor="rgba(182, 62, 120, 0.9)"
              px={2}
              py={0.3}
            >
              {item.heading}
            </MotionText>
            <MotionText
              color="white"
              mt={2}
              backgroundColor="rgba(182, 62, 120, 0.9)"
              px={2}
              py={0.3}
            >
              {item.description}
            </MotionText>
          </MotionFlex>
        ))}
      </MotionFlex>
    </MotionBox>
  );
};

export default Roadmap;
