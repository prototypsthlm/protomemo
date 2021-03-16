import React from "react";
import { Box, Center, Heading, VStack } from "@chakra-ui/layout";
import { GamesList } from "../packages/games/ui";
import { gamesData } from "../packages/games/mock-data";

export const HomePage = () => {
  return (
    <Center height="100vh" paddingX={32}>
      <VStack spacing={16}>
        <Heading size="3xl">Welcome to Protomemo</Heading>
        <GamesList games={gamesData} />
      </VStack>
    </Center>
  );
};
