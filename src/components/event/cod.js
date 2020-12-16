import { Flex } from "@chakra-ui/react";
import React from "react";
import ContentTransform from "./content-transform";
import Heading from "./heading";
import Container from "./container";

const CoD = ({ cod }) => {
  return (
    <Flex
      mb={3}
      direction="column"
      align="center"
      justify="center"
      p={2}
      m="2em auto"
      boxShadow="-3px 3px #000"
      border="solid 1px #000"
      w={["300px", "1000px"]}
    >
      <Container>
        <Heading>Code of Conduct</Heading>
      </Container>
      <ContentTransform {...cod} />
    </Flex>
  );
};

export default CoD;
