import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, MemoryPage } from "./pages";
import { theme } from "./packages/shared";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/memory/:gameId">
            <MemoryPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};
