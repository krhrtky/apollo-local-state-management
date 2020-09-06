module.exports = {
  client: {
    name: "client",
    includes: ["./src/**/*.gql"],
    service: {
      localSchemaFile: ["./src/external/GraphQL/schema.graphql"],
    },
  },
};
