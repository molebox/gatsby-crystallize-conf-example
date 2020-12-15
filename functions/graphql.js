const {ApolloServer, makeRemoteExecutableSchema, introspectSchema} = require('apollo-server-lambda');
const { createServerHttpLink } = require('graphql-tools');
const fetch = require('isomorphic-fetch');

// create the http link to fetch the gql data from crystallize
const link = createServerHttpLink({
    uri: 'https://api.crystallize.com/rich-haines/catalogue',
    fetch,
  });

// use schema introspection to get the schema from the remote source. 
// in our case that is crystallize
const schema = makeRemoteExecutableSchema({
  schema: introspectSchema(link),
  link,
})

const server = new ApolloServer({
  schema,
  introspection: true
});

exports.handler = server.createHandler({
  // cors: {
  //     // origin: "*",
  //     origin: [
  //         'http://localhost',
  //     ],
  //     // credentials: true
  // }
});
