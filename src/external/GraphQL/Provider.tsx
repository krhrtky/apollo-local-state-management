import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./ApolloClient";

export const wrapWithProvider: React.FC = ({ children }) => (
  <ApolloProvider client={Client}>{children}</ApolloProvider>
);
