import { Button } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <Button
      type="button"
      variantColor="green"
      onClick={() => history.push("/todos/new")}
    >
      todos
    </Button>
  );
};
