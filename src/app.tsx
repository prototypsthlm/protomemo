import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, MemoryPage } from "./pages";

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
