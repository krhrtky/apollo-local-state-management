import { Flex } from "@chakra-ui/core";
import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

type Props = {} & RouteConfigComponentProps;

export const App: React.FC<Props> = ({ route }) => (
  <Flex align="center" justify="center" size="100%" height="100vh">
    {renderRoutes(route?.routes)}
  </Flex>
);
