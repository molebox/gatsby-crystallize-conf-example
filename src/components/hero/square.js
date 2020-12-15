import { Box } from "@chakra-ui/react";
import React from "react";

const Square = ({ color, shadowColor, className }) => {
  return (
    <Box
      className={className}
      bgColor={color}
      w="30px"
      h="30px"
      boxShadow={`-3px 3px ${shadowColor}`}
      borderRadius={0}
    />
  );
};

export default Square;
