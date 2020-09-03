import React from "react";
import { render } from "react-dom";
import { App } from "@/App";
import { withProviders } from "./Provider";

render(withProviders(<App />), document.getElementById("app"));
