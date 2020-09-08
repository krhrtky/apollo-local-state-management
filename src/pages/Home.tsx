import React from "react";
import { AuthenticationImpl, CheckAuthorizedImpl } from "@/useCases";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const authentication = AuthenticationImpl();
  const authorized = CheckAuthorizedImpl().handle();
  const history = useHistory();

  return (
    <>
      <div>App: {authorized.toString()}</div>
      <button
        type="button"
        onClick={() =>
          authentication.handle({
            email: "example@gmail.com",
            password: "xxxx",
          })
        }
      >
        push state
      </button>
      <button type="button" onClick={() => history.push("/logIn")}>
        login
      </button>
    </>
  );
};
