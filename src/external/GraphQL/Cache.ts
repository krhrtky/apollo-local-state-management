import { InMemoryCache } from "@apollo/client";

export const Cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todo: {
          read(_, { toReference, variables, canRead }) {
            const ref = toReference({
              __typename: "Todo",
              id: variables?.input,
            });

            return canRead(ref)
              ? ref
              : {
                  __typename: "NotFound",
                };
          },
        },
      },
    },
    Todo: {
      fields: {
        createdAt: {
          read(existing) {
            return existing && new Date(existing);
          },
        },
        updatedAt: {
          read(existing) {
            return existing && new Date(existing);
          },
        },
      },
    },
  },
});
