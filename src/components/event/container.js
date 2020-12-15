import React from "react";
import { Box } from "@chakra-ui/react";

const Container = ({ children, ...rest }) => (
  <Box my={6} {...rest}>
    {children}
  </Box>
);

export default Container;
