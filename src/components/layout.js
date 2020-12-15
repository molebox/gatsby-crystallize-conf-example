import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box bgColor="brand.bg" h="100%" minH="100vh" w="100%" overflow="hidden">
      <Flex direction="column" m="0 auto" bgColor="brand.bg" p={3}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
