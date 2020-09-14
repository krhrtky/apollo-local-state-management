import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { InitailState } from "./__generated__/InitailState";
import query from "./InitalState.gql";
import { Cache } from "./Cache";
import typeDefs from "./schema.graphql";

export const apolloClient = new ApolloClient({
  cache: Cache,
  typeDefs,
});

const initialize = (client: ApolloClient<NormalizedCacheObject>) => {
  client.writeQuery<InitailState, void>({
    query,
    data: {
      user: {
        __typename: "User",
        id: "id12345",
        name: "user",
        email: "example@email.com",
        password: "password",
      },
      todos: [],
    },
  });

  return client;
};

export const Client = initialize(apolloClient);
