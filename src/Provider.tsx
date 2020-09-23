import React from "react";
import { GraphQL, Theme } from "@/external";
import * as Route from "@/pages/Route";

const Providers = [
  GraphQL.wrapWithProvider,
  Theme.wrapWithProvider,
  Route.wrapWithRouter,
];

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
