import { render } from "react-dom";
import { renderRoutes } from "react-router-config";
import { withProviders } from "./Provider";
import { routes } from "./pages";

const App = withProviders(renderRoutes(routes));

render(App, document.getElementById("app"));
