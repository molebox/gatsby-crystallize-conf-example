import React from "react";
import Section from "./../section";
import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Section>
      <Flex justify="center" align="center">
        <Spinner size="xl" />
      </Flex>
    </Section>
  );
};

export default Loading;
