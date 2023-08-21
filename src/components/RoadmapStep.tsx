import { Box, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

interface RoadmapStepProps {
  title: string;
  description: string;
  index: number;
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });

  const slideInVariant = {
    hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Adjusting margins based on breakpoints for responsiveness
  const marginLeft = useBreakpointValue({ base: "5%", md: index % 2 === 0 ? "25%" : "auto" });
  const marginRight = useBreakpointValue({ base: "5%", md: index % 2 === 0 ? "auto" : "25%" });

  return (
    <MotionBox
      ref={ref}
      variants={slideInVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      p={4}
      border="2px solid black"
      borderRadius="md"
      mb={1}
      ml={marginLeft}
      mr={marginRight}
      maxWidth="80%"
    >
      <Box fontWeight="bold">{title}</Box>
      <Box>{description}</Box>
    </MotionBox>
  );
};

export default RoadmapStep;