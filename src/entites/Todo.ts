export type Todo = {
  id: Id;
  title: Title;
  description: Description;
  priority: Priority;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
};

export const Priority = {
  HIGH: "HIGH",
  LOW: "LOW",
  MIDDLE: "MIDDLE",
} as const;

export const Priorities = Object.values(Priority);

export type Id = string & { readonly sym: unique symbol };
export type Title = string & { readonly sym: unique symbol };
export type Description = string & { readonly sym: unique symbol };
export type Priority = Unbox<typeof Priority>;
export type CreatedAt = string & { readonly sym: unique symbol };
export type UpdatedAt = string & { readonly sym: unique symbol };
