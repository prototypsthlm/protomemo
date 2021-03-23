import React from "react";
import { HStack } from "@chakra-ui/layout";
import { GamesCollection } from "../../domain";
import { GameCard } from "../game-card";

interface GamesListProps {
  games: GamesCollection;
}

export const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <HStack spacing={32}>
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </HStack>
  );
};
