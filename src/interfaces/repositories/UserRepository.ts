import { User } from "@/entites";

export interface UserRepository {
  findByEmailAndPassword(param: { email: string; password: string }): User;
  authorized(): boolean;
}
