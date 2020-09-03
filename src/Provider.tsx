import React from "react";
import * as GraphQL from "@/external/GraphQL";

const Providers = [GraphQL.wrapWithProvider];

export const withProviders = (children: React.ReactNode) => (
  <>
    {Providers.reduce(
      (child, Provider) => (
        <Provider>{child}</Provider>
      ),
      children,
    )}
  </>
);
