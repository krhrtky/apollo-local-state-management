import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import fetchDetailQuery from "./FetchTodoDetail.gql";
import {
  FetchTodoDetail,
  FetchTodoDetailVariables,
} from "./__generated__/FetchTodoDetail";
import { NotFound } from "../NotFound";

export const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useQuery<FetchTodoDetail, FetchTodoDetailVariables>(
    fetchDetailQuery,
    {
      fetchPolicy: "cache-only",
      variables: {
        input: id,
      },
    },
  );

  if (loading) {
    return <div>loading...</div>;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (data == null || data.todo.__typename === "NotFound") {
    return <NotFound />;
  }

  return (
    <div>
      <div>{data.todo.title}</div>
      <div>{data.todo.description}</div>
      <div>{data.todo.priority}</div>
      <Link to="/todos">List</Link>
      <Link to="/todos/new">Create</Link>
    </div>
  );
};
