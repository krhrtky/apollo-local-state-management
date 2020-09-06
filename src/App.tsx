import React from "react";
import { AuthenticationImpl, CheckAuthorizedImpl } from "@/useCases";

export const App = () => {
  const authentication = AuthenticationImpl();
  const authorized = CheckAuthorizedImpl().handle();

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
        login
      </button>
    </>
  );
};
