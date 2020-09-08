import { RouteConfig } from "react-router-config";
import { LogIn } from "./LogIn";

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    exact: true,
    component: LogIn,
  },
];

export const loginRoutes = routes;
