import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const colorScheme = "light";
// const toggleColorScheme = (value) =>
//   setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

root.render(
  <ColorSchemeProvider
    colorScheme={colorScheme}
    // toggleColorScheme={toggleColorScheme}
  >
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </ColorSchemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
