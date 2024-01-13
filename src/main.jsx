import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { ToastContainer } from "react-toastify";
import { ColorProvider } from "./stores/GlobalColor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <GlobalStyles />
      <ColorProvider>
      <AppProvider />
      </ColorProvider>
    </PrimeReactProvider>
    <ToastContainer
      position='bottom-right'
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme='dark'
    />
  </React.StrictMode>
);
