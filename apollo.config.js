/**
 * @type import("apollo").ApolloConfig
 */
module.exports = {
  client: {
    name: "client",
    includes: ["./src/**/*.gql"],
    excludes: ["./src/**/*.graphql"],
    service: {
      localSchemaFile: ["./src/external/GraphQL/schema.graphql"],
    },
  },
};
