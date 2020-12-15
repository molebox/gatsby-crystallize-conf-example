import { ChakraProvider } from "@chakra-ui/react";
const React = require("react");
// We need this as fetch only runs in the browser
const fetch = require("isomorphic-fetch");
const {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} = require("@apollo/client");
const {theme} = require("./src/theme");

// create the http link to fetch the gql results
const httpLink = createHttpLink({
  uri: "https://api.crystallize.com/rich-haines/catalogue",
  fetch,
  // fetchOptions: {
  //     mode: 'no-cors'
  // }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  // link: new HttpLink({
  //     uri: '/.netlify/functions/graphql',
  //     // fetchOptions: {
  //     //     mode: 'no-cors',
  //     //   }
  // }),
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </ChakraProvider>
);
