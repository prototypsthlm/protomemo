import React, { useState } from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import { Deck } from "../deck";
import { ContentType, generateGame, ImageContent, Level } from "../../domain";
import { PrototypGangMock } from "../../mock-data/prototyp-gang";
import { StartGame } from "../start-game";
import Icon from "@chakra-ui/icon";
import { IoClose } from "react-icons/io5";

const getCardsFromLevel = generateGame(PrototypGangMock);

const prototypCover: ImageContent = {
  type: ContentType.Image,
  content:
    "https://images.ctfassets.net/hjzae6fpsq6v/3XhlMmZzpXKnz9zScNzHNv/a5bd3808c87f4f17860100e9d11ff754/Artboard.jpg",
};

export const MemoryGame = () => {
  const [level, setLevel] = useState<Level | null>(null);
  const onSetLevel = (level: Level) => {
    setLevel(level);
  };

  return (
    <Box bgColor="gray.100">
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
      <Center minHeight="100vh">
        {level ? (
          <Deck cards={getCardsFromLevel(level)} cover={prototypCover} />
        ) : (
          <StartGame onSelectLevel={onSetLevel} />
        )}
      </Center>
    </Box>
  );
};
