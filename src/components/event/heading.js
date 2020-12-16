import React from "react";
import { Text } from "@chakra-ui/react";

const Heading = ({ children }) => (
    <Text color="#000" fontSize="2xl" m={0} textAlign="center" fontFamily="heading">
      {children}
    </Text>
);

export default Heading;
