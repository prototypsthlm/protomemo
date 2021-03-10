import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Text, Flex } from "@chakra-ui/react";
import { Card } from "./packages/memory";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} backgroundColor="gray.100">
        <Card />
      </Grid>
    </Box>
  </ChakraProvider>
);
