import React, { useState } from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import { generateGame, Level } from "../../domain";
import { StartGame } from "../start-game";
import Icon from "@chakra-ui/icon";
import { IoClose } from "react-icons/io5";
import { Game } from "../game";
import { mockGames } from "../../mock-data/mock-games";

const gamesFromMock = generateGame(mockGames);

interface GameLayoutProps {
  gameId: string;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ gameId }) => {
  const [level, setLevel] = useState<Level | null>(null);

  const onSetLevel = (level: Level) => {
    setLevel(level);
  };

  const getGame = gamesFromMock(gameId);

  return (
    <Box bgColor="gray.100" minHeight="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        paddingY={8}
        paddingX={16}
      >
        <Heading size="md" marginLeft="auto">
          Your score: 100
        </Heading>
        <Icon as={IoClose} marginLeft="auto" width={12} height={12} />
      </Flex>
      <Center>
        {level ? (
          <Game game={getGame(level)} />
        ) : (
          <StartGame onSelectLevel={onSetLevel} />
        )}
      </Center>
    </Box>
  );
};
