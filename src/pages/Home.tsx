import React from "react";
import { CheckAuthorizedImpl } from "@/useCases";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const authorized = CheckAuthorizedImpl().handle();
  const history = useHistory();

  return (
    <>
      <div>App: {authorized.toString()}</div>
      {authorized || (
        <button type="button" onClick={() => history.push("/logIn")}>
          login
        </button>
      )}
    </>
  );
};
