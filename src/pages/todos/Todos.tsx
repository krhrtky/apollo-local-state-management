import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import fetchQuery from "./FetchTodos.gql";
import { FetchTodos } from "./__generated__/FetchTodos";

export const Todos: React.FC<{}> = () => {
  const { loading, data } = useQuery<FetchTodos, void>(fetchQuery, {
    fetchPolicy: "cache-only",
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data?.todos.map(todo => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </div>
      ))}
    </div>
  );
};
