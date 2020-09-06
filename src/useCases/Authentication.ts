import { Authentication } from "@/interfaces/useCases/Authentication";
import { InMemoryUserRepository } from "@/external/GraphQL/InMemory/InMemoryUserRepository";
import { UserRepository } from "@/interfaces/repositories";

export const AuthenticationImpl: (
  repository?: UserRepository,
) => Authentication = (repository = InMemoryUserRepository()) => ({
  handle(param: { email: string; password: string }) {
    repository.findByEmailAndPassword(param);
  },
});
