import { ApolloClient } from "@apollo/client";
import { cache } from "./Cache";
import typeDefs from "./schema.graphql";

export const Client = new ApolloClient({
  cache,
  typeDefs,
});
