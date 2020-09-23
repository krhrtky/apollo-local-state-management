import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export const wrapWithProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <CSSReset />
    {children}
  </ThemeProvider>
);
