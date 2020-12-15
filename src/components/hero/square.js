import { Box } from "@chakra-ui/react";
import React from "react";

const Circle = ({ color, shadowColor, className }) => {
  return (
    <Box
      className={className}
      bgColor={color}
      // borderRadius="50%"
      w="30px"
      h="30px"
      boxShadow={`-3px 3px ${shadowColor}`}
      borderRadius={0}
    />
  );
};

export default Circle;
