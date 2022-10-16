import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCliente = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryCliente}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
