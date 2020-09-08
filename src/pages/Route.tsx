import React from "react";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const wrapWithRouter: React.FC = ({ children }) => (
  <Router history={history}>
    <BrowserRouter>{children}</BrowserRouter>
  </Router>
);
