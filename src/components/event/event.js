import React from "react";
import { useQuery, gql } from "@apollo/client";
import Section from "../section";
import { Flex, Text, Grid, Image, Box } from "@chakra-ui/react";
import Error from "../state/error";
import Loading from "../state/loading";
import Speaker from "./speaker";
import Schedule from "./schedule";
import CoD from "./cod";
import BuyTicketButton from "./buy-ticket-button";
import Container from "./container";
import Heading from "./heading";

const Event = ({ path }) => {
  const { loading, error, data } = useQuery(GET_CONFERENCE, {
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

  let title = data.catalogue.components[0].content.text;
  let logo = data.catalogue.components[1].content.images[0].variants[0].url;
  let codeOfConduct = data.catalogue.components[2].content.json;
  let speakersPath = data.catalogue.components[4].content.items.map(
    (node) => node.path
  );
  let schedulePath = data.catalogue.components[3].content.items[0].path;

  return (
    <Section>
      <Grid
        templateColumns="10% 1fr 10%"
        autoRows="auto"
        w={["95%", "1440px"]}
        m="2em auto"
        bgColor="brand.offWhite"
        gap={5}
        boxShadow="-3px 3px #000"
      >
        <Flex gridColumn={2} gridRow={1} justify="space-evenly" align="center">
          <Box
            bgColor="brand.offBlack"
            p={6}
            lineHeight={1}
            transform="rotate(-5deg)"
            boxShadow="-3px 3px #e93f79"
          >
            <Text
              fontFamily="heading"
              fontSize={["xl", "5xl"]}
              color="brand.offWhite"
              fontWeight={700}
            >
              {title}
            </Text>
          </Box>
          <Image src={logo} boxSize={100} boxShadow="-3px 3px #e93f79" />
        </Flex>
        <Container
          gridRow={2}
          gridColumn={2}
          border="solid 1px"
          p={2}
          boxShadow="-3px 3px #000"
        >
          <Heading>The Speakers</Heading>
          <Flex
            gridRow={2}
            gridColumn={2}
            p={2}
            justify="center"
            align="center"
            wrap="wrap"
            m="1em auto"
            maxW="1000px"
          >
            {speakersPath.map((path, index) => (
              <Speaker key={index} path={path} />
            ))}
          </Flex>
        </Container>
        <Container gridRow={3} gridColumn={2}>
          <Schedule path={schedulePath} />
        </Container>
        <Container gridRow={4} gridColumn={2}>
          <CoD cod={codeOfConduct} />
        </Container>
        <Container mx="auto" mb={6} gridRow={5} gridColumn={2}>
          <BuyTicketButton />
        </Container>
      </Grid>
    </Section>
  );
};

export default Event;

const GET_CONFERENCE = gql`
  query GetConference($path: String!) {
    catalogue(language: "en", path: $path) {
      name
      path
      components {
        content {
          ...richText
          ...imageContent
          ...singleLineText
          ...paragraphsCollection
          ...propertiesTable
          ...relations
        }
      }
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

  fragment paragraphsCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLineText
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }

  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }

  fragment relations on ItemRelationsContent {
    items {
      name
      path
      components {
        content {
          ...richText
          ...imageContent
          ...singleLineText
          ...paragraphsCollection
        }
      }
    }
  }
`;
