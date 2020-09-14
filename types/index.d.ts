declare module "*.gql" {
  // eslint-disable-next-line import/no-duplicates
  import { DocumentNode } from "graphql";

  const value: DocumentNode;

  export = value;
}

declare module "*.graphql" {
  // eslint-disable-next-line import/no-duplicates
  import { DocumentNode } from "graphql";

  const value: DocumentNode;

  export = value;
}

type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
