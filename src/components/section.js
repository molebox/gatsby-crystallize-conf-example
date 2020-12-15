import { Flex } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, fullPage }) => {
  return (
    <Flex
      as="section"
      h={`${fullPage ? "100vh" : "100%"}`}
      direction="column"
      maxW="1440px"
      m="0 auto"
    >
      {children}
    </Flex>
  );
};

export default Section;
