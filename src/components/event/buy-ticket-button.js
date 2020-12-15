import React from "react";
import { Button } from "@chakra-ui/react";

const BuyTicketButton = () => {
  return (
    <Button
      bg="brand.accent"
      h="70px"
      w="250px"
      px={2}
      transition="all .25s ease-in-out"
      boxShadow="-5px 5px #000"
      borderRadius={0}
      variant="outline"
      textTransform="uppercase"
      fontSize="lg"
      _active={{
        boxShadow: "-2px 2px #000",
        transform: "translate(-2px, 2px)",
      }}
      _hover={{
        boxShadow: "-2px 2px #000",
        transform: "translate(-2px, 2px)",
      }}
    >
      Buy a Ticket!
    </Button>
  );
};

export default BuyTicketButton;
