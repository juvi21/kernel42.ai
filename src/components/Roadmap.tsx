import { Center, Heading } from "@chakra-ui/react";
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
    {
      title: "Step 2",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet., ",
    },
    {
      title: "Step 3",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet., ",
    },

    // ... add more steps as needed
  ];

  return (
    <Center
      flexDirection="column"
      width="100%"
      bg="#FAF5EA"
      paddingY="50px"
      borderBottom="2px solid black"
      borderTop="2px solid black"
    >
      <Center flexDirection="column" mb={6} px={["5%", "10%"]}>
        <Heading mb={8}>Roadmap</Heading> {/* This is the new heading */}
      </Center>
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
