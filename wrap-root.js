const React = require('react');
// We need this as fetch only runs in the browser
const fetch =require('isomorphic-fetch');
const {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache
} = require('@apollo/client');


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: '/.netlify/functions/graphql',
        // fetchOptions: {
        //     mode: 'no-cors',
        //   }
    }),
    fetch
});

export const wrapRootElement = ({element}) => (
<ApolloProvider client={client}>{element}</ApolloProvider>
)