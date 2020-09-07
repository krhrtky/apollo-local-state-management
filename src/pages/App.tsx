import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

type Props = {} & RouteConfigComponentProps;

export const App: React.FC<Props> = ({ route }) => (
  <>{renderRoutes(route?.routes)}</>
);
