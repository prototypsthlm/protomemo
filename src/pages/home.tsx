import React from "react";
import { Center, Heading, VStack } from "@chakra-ui/layout";
import { GamesList } from "../packages/games/ui";
import { gamesData } from "../packages/games/mock-data";

export const HomePage: React.FC = () => {
  return (
    <Center height="100vh" paddingX={32}>
      <VStack spacing={16}>
        <Heading size="3xl">Let's play a game!</Heading>
        <GamesList games={gamesData} />
      </VStack>
    </Center>
  );
};
