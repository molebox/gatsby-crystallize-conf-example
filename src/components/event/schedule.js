import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Loading from "../state/loading";
import Error from "../state/error";
import { useQuery, gql } from "@apollo/client";
import Heading from "./heading";
import Container from "./container";

const Schedule = ({ path }) => {
  const { loading, error, data } = useQuery(GET_SCHEDULE, {
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

  let title = data.catalogue.components[0].content.sections[0].title;
  let schedule = data.catalogue.components[0].content.sections[0].properties;

  return (
    <Flex
      justify="center"
      p={2}
      mx="auto"
      w={["300px", "1000px"]}
      direction="column"
    >
      <Container>
        <Heading>{title}</Heading>
      </Container>
      <Box as="table" cellPadding={6} mb={6}>
        <Box as="thead">
          <Box as="tr">
            <Box as="th" align="left" colSpan="-1">
              <Text
                fontSize={["md", "xl"]}
                fontWeight={600}
                fontFamily="heading"
                color="#000"
              >
                Speaker
              </Text>
            </Box>
            <Box as="th" align="left">
              <Text
                fontSize={["md", "xl"]}
                fontWeight={600}
                fontFamily="heading"
                color="#000"
              >
                Subject...
              </Text>
            </Box>
          </Box>
        </Box>

        <Box as="tbody">
          {schedule.map((node, index) => (
            <Box key={index} as="tr">
              <Box as="td" borderBottom="solid 1px" borderLeft="solid 1px" borderColor="#000">
                <Text color="#000" fontSize={["md", "xl"]} fontFamily="body">
                  {node.key}
                </Text>
              </Box>
              <Box as="td" borderBottom="solid 1px" borderLeft="solid 1px" borderColor="#000">
                <Text color="#000" fontSize={["md", "xl"]} fontFamily="body">
                  {node.value}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default Schedule;

const GET_SCHEDULE = gql`
  query GetSchedule($path: String!) {
    catalogue(language: "en", path: $path) {
      ...item
      components {
        content {
          ...propertiesTable
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
`;
