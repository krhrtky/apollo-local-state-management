import React from "react";
import * as GraphQL from "@/external/GraphQL";
import * as Route from "@/pages/Route";

const Providers = [GraphQL.wrapWithProvider, Route.wrapWithRouter];

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
