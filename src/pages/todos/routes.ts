import { RouteConfig } from "react-router-config";
import { Todos } from "./Todos";
import { New } from "./New";
import { Todo } from "./Todo";
import { NotFound } from "../NotFound";

export const Routes: Array<RouteConfig> = [
  {
    path: "/todos",
    exact: true,
    component: Todos,
  },
  {
    path: "/todos/new",
    exact: true,
    component: New,
  },
  {
    path: "/todos/:id",
    exact: true,
    component: Todo,
  },
  {
    path: "*",
    component: NotFound,
  },
];
