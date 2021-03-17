import React, { useState } from "react";
import { Box, Center } from "@chakra-ui/layout";
import { Deck } from "../deck";
import { ContentType, generateGame, ImageContent, Level } from "../../domain";
import { PrototypGangMock } from "../../mock-data/prototyp-gang";
import { StartGame } from "../start-game";

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
    <Center bgColor="gray.100" minHeight="100vh">
      {level ? (
        <Deck cards={getCardsFromLevel(level)} cover={prototypCover} />
      ) : (
        <StartGame onSelectLevel={onSetLevel} />
      )}
    </Center>
  );
};
