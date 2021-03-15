import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Deck } from "./packages/memory";
import { createCardList, shuffleCardList } from "./packages/memory/domain/card";
import { PrototypGangMock } from "./packages/memory/mock-data/prototyp-gang";
import { ContentType, ImageContent } from "./packages/memory/domain/content";

const cardList = shuffleCardList(createCardList(PrototypGangMock));

const prototypCover: ImageContent = {
  type: ContentType.Image,
  content:
    "https://images.ctfassets.net/hjzae6fpsq6v/3XhlMmZzpXKnz9zScNzHNv/a5bd3808c87f4f17860100e9d11ff754/Artboard.jpg",
};

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Deck cards={cardList} cover={prototypCover} />
    </ChakraProvider>
  );
};
