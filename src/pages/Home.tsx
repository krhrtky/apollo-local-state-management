import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <button type="button" onClick={() => history.push("/todos/new")}>
      todos
    </button>
  );
};
