import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import Router from "./Router";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleDark = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <button onClick={toggleDark}>toggle</button>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
