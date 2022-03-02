import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { DarkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
