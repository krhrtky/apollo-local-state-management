import { Authentication } from "@/interfaces/useCases/Authentication ";
import { InMemoryUserRepository } from "@/external/GraphQL/InMemory/InMemoryUserRepository";

export const AuthenticationImpl: () => Authentication = () => {
  const repository = new InMemoryUserRepository();
  return {
    handle(param: { email: string; password: string }) {
      repository.findByEmailAndPassword(param);
    },
  };
};
