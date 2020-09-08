import { render } from "react-dom";
import { renderRoutes } from "react-router-config";
import { withProviders } from "./Provider";
import { Routes } from "./pages";

const App = withProviders(renderRoutes(Routes));

render(App, document.getElementById("app"));
