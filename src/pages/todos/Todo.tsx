import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/core";
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

  const history = useHistory();

  if (loading) {
    return <div>loading...</div>;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (data == null || data.todo.__typename === "NotFound") {
    return <NotFound />;
  }

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      width="inherit"
      height="30%"
      margin="0 30vw"
    >
      <Stack spacing={2}>
        <Box marginX="10px">
          <Badge variantColor="teal">{data.todo.priority}</Badge>
        </Box>
        <Box marginX="10px">
          <Heading as="h3">{data.todo.title}</Heading>
        </Box>
        <Divider />
        <Box marginX="10px">{data.todo.description}</Box>
        <Divider />
        <Flex justifyContent="space-around">
          <Button
            type="button"
            variantColor="green"
            onClick={() => history.push("/todos")}
          >
            List
          </Button>
          <Button
            type="button"
            variantColor="green"
            onClick={() => history.push("/todos/new")}
          >
            Create
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};
