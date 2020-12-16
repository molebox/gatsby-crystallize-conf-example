import { Flex, Image, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "../state/loading";
import Error from "../state/error";
import ContentTransform from "./content-transform";
import { RoughNotation } from "react-rough-notation";

const Speaker = ({ path }) => {
  const { loading, error, data } = useQuery(GET_SPEAKER, {
    variables: {
      path: path,
    },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  let image = data.catalogue.components[1].content.images[0].variants[0].url;
  let name = data.catalogue.components[0].content.json;
  let company = data.catalogue.components[2].content.text;
  let bio = data.catalogue.components[3].content.json;
  let twitter = data.catalogue.components[4].content.text;

  return (
    <Flex direction="column" p={2} align="center" minH="300px">
      <Image mb={3} src={image} borderRadius="full" boxSize={100} />
      <RoughNotation
        type="highlight"
        strokeWidth={2}
        padding={0}
        show={true}
        color="#e93f79"
      >
        <ContentTransform fontSize="xl" {...name} />
      </RoughNotation>
      <Text color="#000" fontSize="md" fontWeight={600} my={3}>
        {company}
      </Text>
      <Box maxW="300px" align="center">
        <ContentTransform {...bio} />
      </Box>
      <Text color="#000"  fontWeight={600} fontSize="md" my={3}>
        {twitter}
      </Text>
    </Flex>
  );
};

export default Speaker;

const GET_SPEAKER = gql`
  query GetSpeaker($path: String!) {
    catalogue(language: "en", path: $path) {
      ...item
      name
      components {
        content {
          ...richText
          ...singleLineText
          ...imageContent
        }
      }
    }
  }

  fragment item on Item {
    name
    type
    path
    children {
      name
    }
  }

  fragment singleLineText on SingleLineContent {
    text
  }

  fragment richText on RichTextContent {
    json
    html
    plainText
  }

  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      key
    }
  }

  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
`;
