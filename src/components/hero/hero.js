import React from "react";
import gsap from "gsap";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Square from "./square";
import Section from "../section";

const Hero = () => {
  // create (9x4) Square elements and attach the Square class
  const topSquaresLeft = Array.from(Array(36)).map((_, index) => {
    return (
      <Square
        key={`${index}-topLeft`}
        className="topLeft"
        color="#000213"
        shadowColor="#fff"
      />
    );
  });
  // create (5x4) Square elements and attach the Square class
  const topSquaresRight = Array.from(Array(20)).map((_, index) => {
    return (
      <Square
        key={`${index}-topRight`}
        className="topRight"
        color="#e93f79"
        shadowColor="#000"
      />
    );
  });
  const bottomSquaresLeft = Array.from(Array(36)).map((_, index) => {
    return (
      <Square
        key={`${index}-bottomLeft`}
        className="bottomLeft"
        color="#000213"
        shadowColor="#fff"
      />
    );
  });
  // create (5x4) Square elements and attach the Square class
  const bottomSquaresRight = Array.from(Array(20)).map((_, index) => {
    return (
      <Square
        key={`${index}-bottomLeft`}
        className="bottomRight"
        color="#e93f79"
        shadowColor="#000"
      />
    );
  });

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });

    let TL = gsap.timeline();
    TL.from(".topLeft", {
      y: window.innerHeight * 1,
      x: window.innerWidth * -1,
      duration: 0.5,
      ease: "back.out(1.3)",
      stagger: {
        grid: [9, 4],
        from: "random",
        amount: 1.5,
      },
    });
    TL.from(
      ".topRight",
      {
        y: window.innerHeight * -1,
        x: window.innerWidth * 1,
        duration: 0.6,
        ease: "back.out(1.4)",
        stagger: {
          grid: [5, 4],
          from: "random",
          amount: 1.5,
        },
      },
      "-=1.2"
    );
    TL.from(
      ".title",
      {
        opacity: 0,
        duration: 1,
      },
      "-=1.2"
    );
    TL.from(
      ".bottomLeft",
      {
        y: window.innerHeight * -1,
        x: window.innerWidth * 1,
        duration: 0.7,
        ease: "back.out(1.5)",
        stagger: {
          grid: [9, 4],
          from: "random",
          amount: 1.5,
        },
      },
      "-=1.2"
    );
    TL.from(
      ".bottomRight",
      {
        y: window.innerHeight * 1,
        x: window.innerWidth * -1,
        duration: 0.8,
        ease: "back.out(1.6)",
        stagger: {
          grid: [5, 4],
          from: "random",
          amount: 1.5,
        },
      },
      "-=1.2"
    );
  }, []);

  return (
    <Section fullPage>
      <Flex m="0 auto">
        <Grid
          w="100%"
          templateColumns="repeat(9, 80px)"
          templateRows="repeat(4, 80px)"
          placeItems="center"
          display={["none", "grid"]}
        >
          {topSquaresLeft.map((Square) => Square)}
        </Grid>
        <Grid
          w="100%"
          templateColumns="repeat(5, 80px)"
          templateRows="repeat(4, 80px)"
          placeItems="center"
          display={["none", "grid"]}
        >
          {topSquaresRight.map((Square) => Square)}
        </Grid>
      </Flex>
      <Flex p={5} align="center" justify="center" w="100%">
        <Text
          textTransform="uppercase"
          fontFamily="heading"
          fontSize="6xl"
          fontWeight={700}
          color="brand.offWhite"
          className="title"
          letterSpacing={[2, 5]}
          textShadow={[
            null,
            "-3px -3px 0px #fff, 3px -3px 0px #fff, -3px 3px 0px #fff, 3px 3px 0px #fff, 4px 4px 0px #000, 5px 5px 0px #000, 6px 6px 0px #000, 7px 7px 0px #000, 8px 8px 0px #000, 9px 9px 0px #000",
          ]}
        >
          The conf vault
        </Text>
      </Flex>
      <Flex m="0 auto">
        <Grid
          w="100%"
          templateColumns="repeat(9, 80px)"
          templateRows="repeat(4, 80px)"
          placeItems="center"
          display={["none", "grid"]}
        >
          {bottomSquaresLeft.map((Square) => Square)}
        </Grid>
        <Grid
          w="100%"
          templateColumns="repeat(5, 80px)"
          templateRows="repeat(4, 80px)"
          placeItems="center"
          display={["none", "grid"]}
        >
          {bottomSquaresRight.map((Square) => Square)}
        </Grid>
      </Flex>
    </Section>
  );
};

export default Hero;
