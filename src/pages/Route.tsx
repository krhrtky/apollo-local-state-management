import React from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const wrapWithRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);
