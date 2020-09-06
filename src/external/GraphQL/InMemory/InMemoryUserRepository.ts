import { useApolloClient } from "@apollo/client";
import { UserRepository } from "@/interfaces/repositories/UserRepository";
import { User } from "@/entites";
import * as FetchUserQuery from "./FetchUser.gql";
import { FetchUser } from "./__generated__/FetchUser";

export class InMemoryUserRepository implements UserRepository {
  private client = useApolloClient();

  findByEmailAndPassword(param: { email: string; password: string }) {
    const user = {
      __typename: "User",
      id: "xxxx",
      name: "user",
      email: param.email,
    } as const;

    this.client.writeQuery<FetchUser, void>({
      query: FetchUserQuery,
      data: {
        user,
      },
    });

    return User.from({ ...user });
  }
}
