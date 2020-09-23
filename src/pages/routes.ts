import { RouteConfig } from "react-router-config";
import { App } from "./App";
import { Home } from "./Home";
import { Routes as TodosRoutes } from "./todos";

const Path = {
  Home: "/",
} as const;

export const Routes: Array<RouteConfig> = [
  {
    component: App,
    routes: [
      {
        path: Path.Home,
        exact: true,
        component: Home,
      },
      ...TodosRoutes,
    ],
  },
];
