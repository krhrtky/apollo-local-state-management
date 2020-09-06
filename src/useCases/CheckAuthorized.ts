import type { CheckAuthorized } from "@/interfaces/useCases";
import { InMemoryUserRepository } from "@/external/GraphQL/InMemory/InMemoryUserRepository";
import { UserRepository } from "@/interfaces/repositories";

export const CheckAuthorizedImpl: (
  repository?: UserRepository,
) => CheckAuthorized = (repository = InMemoryUserRepository()) => ({
  handle() {
    return repository.authorized();
  },
});
