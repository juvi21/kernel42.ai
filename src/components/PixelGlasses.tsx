// PixelGlasses.tsx

import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const PixelGlasses: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = (eyeRef: React.RefObject<HTMLDivElement>) => {
    if (eyeRef.current) {
      const eye = eyeRef.current.getBoundingClientRect();
      const deltaX = cursorPos.x - (eye.left + eye.width / 2);
      const deltaY = cursorPos.y - (eye.top + eye.height / 2);

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(eye.width / 4, Math.hypot(deltaX, deltaY));

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    }

    return { x: 0, y: 0 };
  };

  return (
    <Center w="120px" h="40px" bg="black" borderRadius="5px" position="relative">
      <Box
        ref={leftEyeRef}
        w="40px"
        h="20px"
        bg="white"
        borderRadius="5px"
        position="absolute"
        left="8px"
        top="10px"
      >
        <Center
          w="8px"
          h="8px"
          bg="black"
          borderRadius="50%"
          position="absolute"
          left="50%"
          top="50%"
          transform={`translate(-50%, -50%) translate(${calculatePupilPosition(leftEyeRef).x}px, ${calculatePupilPosition(leftEyeRef).y}px)`}
        />
      </Box>
      <Box
        ref={rightEyeRef}
        w="40px"
        h="20px"
        bg="white"
        borderRadius="5px"
        position="absolute"
        right="8px"
        top="10px"
      >
        <Center
          w="8px"
          h="8px"
          bg="black"
          borderRadius="50%"
          position="absolute"
          left="50%"
          top="50%"
          transform={`translate(-50%, -50%) translate(${calculatePupilPosition(rightEyeRef).x}px, ${calculatePupilPosition(rightEyeRef).y}px)`}
        />
      </Box>
    </Center>
  );
};

export default PixelGlasses;