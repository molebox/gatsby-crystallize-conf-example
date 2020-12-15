import React from "react";
import Section from "../section";
import { Flex, Text } from "@chakra-ui/react";

const Error = () => {
  return (
    <Section>
      <Flex justify="center" align="center">
        <Text>You broke it! Try turning it on and off again...</Text>
      </Flex>
    </Section>
  );
};

export default Error;
