import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { string, object } from "yup";
import { RouteConfigComponentProps } from "react-router-config";
import { AuthenticationImpl } from "@/useCases";

type FormValues = Readonly<{
  email: string;
  password: string;
}>;

const schema = object<FormValues>({
  email: string().required().email(),
  password: string().required(),
});

type Props = {} & RouteConfigComponentProps;

export const LogIn: React.FC<Props> = () => {
  const { register, errors, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const authentication = AuthenticationImpl();
  const onSubmit = handleSubmit(({ email, password }) => {
    authentication.handle({
      email,
      password,
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          email:
          <input id="email" name="email" type="text" ref={register} />
        </label>
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            autoComplete="off"
            ref={register}
          />
        </label>
        <p>{errors.password && errors.password.message}</p>
      </div>
      <button type="submit">login</button>
    </form>
  );
};
