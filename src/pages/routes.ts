import { RouteConfig } from "react-router-config";
import { App } from "./App";
import { Root } from "./Root";

export const routes: Array<RouteConfig> = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Root,
      },
    ],
  },
];
