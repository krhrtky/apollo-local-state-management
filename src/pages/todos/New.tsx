import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { string, object, mixed } from "yup";
import { Priority, Priorities } from "@/entites/Todo";
import { useApolloClient } from "@apollo/client";
import {
  FetchTodos,
  // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
  FetchTodos_todos,
} from "@/pages/todos/__generated__/FetchTodos";
import { Priority as PriorityEnum } from "@/external/GraphQL/__generated__/globalTypes";
import { useHistory } from "react-router-dom";
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
    const {
      ROOT_QUERY: { todos },
    } = client.extract() as {
      ROOT_QUERY: {
        // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
        todos: Array<FetchTodos_todos>;
      };
    };
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
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">
          <div>title</div>
          <input id="title" name="title" type="text" ref={register} />
        </label>
        <p>{errors.title && errors.title.message}</p>
      </div>
      <div>
        <label htmlFor="description">
          <div>description</div>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={3}
            ref={register}
          />
        </label>
        <p>{errors.description && errors.description.message}</p>
      </div>
      <div>
        <label htmlFor="priority">
          <div>priority</div>
          <select name="priority" id="priority" ref={register}>
            {Priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
        <p>{errors.priority && errors.priority.message}</p>
      </div>
      <button type="submit">register</button>
    </form>
  );
};
