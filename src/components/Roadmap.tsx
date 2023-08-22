import { Center } from "@chakra-ui/react";
import RoadmapStep from "./RoadmapStep";

interface Step {
  title: string;
  description: string;
}

const Roadmap: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Step 1",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet., ",
    },
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
