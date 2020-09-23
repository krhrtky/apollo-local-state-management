import { RouteConfig } from "react-router-config";
import { Todos } from "./Todos";
import { New } from "./New";
import { Todo } from "./Todo";
import { NotFound } from "../NotFound";

export const Path = {
  Todos: "/todos",
  New: "/todos/new",
  Todo: "/todos/:id",
} as const;

export const Routes: Array<RouteConfig> = [
  {
    path: Path.Todos,
    exact: true,
    component: Todos,
  },
  {
    path: Path.New,
    exact: true,
    component: New,
  },
  {
    path: Path.Todo,
    exact: true,
    component: Todo,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const Links = Object.values(Path);
