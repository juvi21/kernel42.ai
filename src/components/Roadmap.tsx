import { Center } from "@chakra-ui/react";
import RoadmapStep from "./RoadmapStep";

interface Step {
  title: string;
  description: string;
}

const Roadmap: React.FC = () => {
  const steps: Step[] = [
    { title: "Step 1", description: "Description for step 1" },
    { title: "Step 2", description: "Description for step 2" },
    { title: "Step 1", description: "Description for step 1" },
    { title: "Step 2", description: "Description for step 2" },
    { title: "Step 1", description: "Description for step 1" },
    { title: "Step 1", description: "Description for step 1" },
    { title: "Step 2", description: "Description for step 2" },
    { title: "Step 1", description: "Description for step 1" },
    // ... add more steps as needed
  ];

  return (
    <Center
      flexDirection="column"
      width="100%"
      bg="#FAF5EA"
      paddingY="30px"
      borderBottom="2px solid black"
    >
      {steps.map((step, index) => (
        <RoadmapStep
          key={index}
          title={step.title}
          description={step.description}
          index={index}
        />
      ))}
    </Center>
  );
};

export default Roadmap;
