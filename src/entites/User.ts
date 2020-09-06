export type User = {
  id: UserId;
  name: Name;
  email: Email;
};

export type UserId = string & { readonly sym: unique symbol };
export type Name = string & { readonly sym: unique symbol };
export type Email = string & { readonly sym: unique symbol };

const UserId = (value: string) => value as UserId;
const Name = (value: string) => value as Name;
const Email = (value: string) => value as Email;

export const User = {
  from: ({
    id,
    name,
    email,
  }: {
    id: string;
    name: string;
    email: string;
  }): User => ({
    id: UserId(id),
    name: Name(name),
    email: Email(email),
  }),
  UserId,
  Name,
  Email,
};
