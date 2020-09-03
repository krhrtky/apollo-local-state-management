import { ApolloClient } from "@apollo/client";
import { cache } from "./Cache";

export const Client = new ApolloClient({
  cache,
});
