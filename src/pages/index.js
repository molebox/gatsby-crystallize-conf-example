import React from "react";

import { useQuery, gql } from "@apollo/client";
import Hero from "../components/hero/hero";
import Layout from "./../components/layout";
import Event from "../components/event/event";
import Loading from "../components/state/loading";
import Error from "../components/state/error";

export default function Index() {
  const { loading, error, data } = useQuery(GET_ROOT_PATHS);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const conferencePaths = data.catalogue.children[0].children.map(
    (node) => node.path
  );

  return (
    <Layout>
      <Hero />
      {conferencePaths.map((path, index) => (
        <Event key={index} path={path} />
      ))}
    </Layout>
  );
}

const GET_ROOT_PATHS = gql`
  query GetRootPaths {
    catalogue(language: "en", path: "/") {
      children {
        path
        shape {
          name
        }
        children {
          path
          shape {
            name
          }
        }
      }
    }
  }
`;
