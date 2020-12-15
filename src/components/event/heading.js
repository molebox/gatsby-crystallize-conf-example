import React from "react";
import { Text } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";

const Heading = ({ children }) => (
  <RoughNotation type="underline" show={false} color="#e93f79">
    <Text fontSize="2xl" m={0} textAlign="center" fontFamily="heading">
      {children}
    </Text>
  </RoughNotation>
);

export default Heading;
