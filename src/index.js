import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styleComponents/styles";
import { ContextGlobalProvider } from "./contextGlobal/contextGlobal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <GlobalStyle />
      <App />
    </ContextGlobalProvider>
  </React.StrictMode>
);
