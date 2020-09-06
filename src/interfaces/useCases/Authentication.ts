export interface Authentication {
  handle(param: { email: string; password: string }): void;
}
