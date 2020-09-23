import React from "react";
import { useQuery } from "@apollo/client";
import { Flex, Text, Heading, Link, Skeleton, Stack } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { Priority } from "@/external/GraphQL/__generated__/globalTypes";
import fetchQuery from "./FetchTodos.gql";
import { FetchTodos } from "./__generated__/FetchTodos";

const ItemRow: React.FC<{
  id: string;
  title: string;
  priority: Priority;
}> = ({ id, title, priority }) => {
  const history = useHistory();

  return (
    <Flex width="100%" justifyContent="space-evenly">
      <Text fontSize="xl">
        <Link onClick={() => history.push(`/todos/${id}`)}>{title}</Link>
      </Text>
      <Text fontSize="xl">{priority}</Text>
    </Flex>
  );
};

export const Todos: React.FC = () => {
  const { loading, data } = useQuery<FetchTodos, void>(fetchQuery, {
    fetchPolicy: "cache-only",
  });
  const history = useHistory();

  if (loading) {
    return (
      <div>
        <div>loading...</div>
        <div>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </div>
      </div>
    );
  }

  if (data == null) {
    history.push("/");
    return null;
  }

  return (
    <div style={{ width: "inherit", height: "70%", margin: "0 20vw" }}>
      <Stack spacing={3}>
        <Heading as="h3">{`${data.todos.length} 件`}</Heading>
        {data.todos.map(({ id, title, priority }) => (
          <ItemRow key={id} id={id} title={title} priority={priority} />
        ))}
        <Link onClick={() => history.push("/todos/new")}>Create</Link>
      </Stack>
    </div>
  );
};
