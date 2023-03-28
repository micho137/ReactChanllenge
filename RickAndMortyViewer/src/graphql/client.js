import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
