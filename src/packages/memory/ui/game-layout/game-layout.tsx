import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { generateGame, Level } from "../../domain";
import { StartGame } from "../start-game";
import { Game } from "../game/game";
import { mockGames } from "../../mock-data/mock-games";

interface GameLayoutProps {
  gameId: string;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ gameId }) => {
  const [level, setLevel] = useState<Level | null>(null);

  const onSetLevel = (level: Level) => {
    setLevel(level);
  };

  const gameData = mockGames[gameId];

  return (
    <Box minHeight="100vh" paddingBottom={16}>
      {level ? (
        <Game game={generateGame(gameData)(level)} />
      ) : (
        <StartGame onSelectLevel={onSetLevel} gameTitle={gameData.title} />
      )}
    </Box>
  );
};
