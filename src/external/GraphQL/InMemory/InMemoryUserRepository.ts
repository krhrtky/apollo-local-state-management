import { useApolloClient, useQuery, ApolloClient } from "@apollo/client";
import { UserRepository } from "@/interfaces/repositories/UserRepository";
import { User } from "@/entites";
import * as FetchUserQuery from "./FetchUser.gql";
import { FetchUser } from "./__generated__/FetchUser";

export const InMemoryUserRepository: (
  client?: ApolloClient<object>,
) => UserRepository = (client = useApolloClient()) => ({
  findByEmailAndPassword(param: { email: string; password: string }) {
    const user = {
      __typename: "User",
      id: "xxxx",
      name: "user",
      email: param.email,
    } as const;

    client.writeQuery<FetchUser, void>({
      query: FetchUserQuery,
      data: {
        user,
      },
    });
    return User.from({ ...user });
  },

  authorized() {
    const { data, loading } = useQuery<FetchUser, void>(FetchUserQuery, {
      nextFetchPolicy: "cache-only",
    });
    return data?.user != null && !loading;
  },
});
