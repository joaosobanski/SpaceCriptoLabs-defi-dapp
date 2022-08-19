import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { Routes } from "./routes";
import { UserContextProvider } from "./context/UserContext";

export const App: React.FC = () => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </UserContextProvider>
  );
};
