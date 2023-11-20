import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppProvider />
  </React.StrictMode>
);
