import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { string, object, mixed } from "yup";
import { Priority, Priorities } from "@/entites/Todo";
import { useApolloClient } from "@apollo/client";
import { FetchTodos } from "@/pages/todos/__generated__/FetchTodos";
import { Priority as PriorityEnum } from "@/external/GraphQL/__generated__/globalTypes";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
} from "@chakra-ui/core";
import query from "./FetchTodos.gql";

type FormValues = Readonly<{
  title: string;
  description: string;
  priority: Priority;
}>;

const schema = object<FormValues>({
  title: string().required(),
  description: string().required(),
  priority: mixed<Priority>().oneOf(Priorities),
});

export const New: React.FC<Readonly<{}>> = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const client = useApolloClient();

  const onSubmit = handleSubmit(({ title, description, priority }) => {
    const maybeTodos = client.readQuery<FetchTodos, void>({
      query,
    });
    const todos = maybeTodos == null ? [] : maybeTodos.todos;

    const now = new Date().getTime();

    const newTodo = {
      __typename: "Todo",
      id: uuid(),
      title,
      description,
      priority: PriorityEnum[priority],
      createdAt: now,
      updatedAt: now,
    } as const;

    client.writeQuery<FetchTodos, void>({
      query,
      data: {
        todos: [newTodo, ...todos],
      },
    });
    history.push("/todos");
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{ width: "inherit", height: "70%", margin: "0 30vw" }}
    >
      <Flex direction="column" justifyContent="space-around" height="inherit">
        <FormControl isInvalid={errors.title != null}>
          <FormLabel htmlFor="title">title</FormLabel>
          <Input type="text" id="title" name="title" ref={register} />
          {errors.title && (
            <FormErrorMessage>errors.title.message</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.description != null}>
          <FormLabel htmlFor="description">description</FormLabel>
          <Textarea name="description" id="description" ref={register} />
          {errors.description && (
            <FormErrorMessage>{errors.description.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.priority != null}>
          <FormLabel htmlFor="priority">priority</FormLabel>
          <Select name="priority" id="priority" ref={register}>
            {Priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </Select>
          {errors.priority && (
            <FormErrorMessage>errors.priority.message</FormErrorMessage>
          )}
        </FormControl>
        <Button variantColor="blue" type="submit">
          register
        </Button>
      </Flex>
    </form>
  );
};
