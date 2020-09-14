import { RouteConfig } from "react-router-config";
import { App } from "./App";
import { Home } from "./Home";
import { Routes as Todos } from "./todos";

export const Routes: Array<RouteConfig> = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      ...Todos,
    ],
  },
];
