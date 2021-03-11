import React, { useState } from "react";
import { ChakraProvider, Box, Grid, theme, Text, Flex } from "@chakra-ui/react";
import { Card, CardSideProps } from "./packages/memory";
import { useImmer } from "use-immer";

type Sides = [CardSideProps, CardSideProps];

interface Card {
  id: string;
  flipped: boolean;
  sides: Sides;
}

const data: Card[] = [
  {
    id: "1",
    flipped: false,
    sides: [
      {
        type: "text",
        content: "Front",
        side: "front",
      },
      {
        type: "text",
        content: "Back",
        side: "back",
      },
    ],
  },
];

export const App = () => {
  const [cards, setCard] = useImmer<Card[]>(data);
  const handleClick = (id: string) => {
    setCard((draft) => {
      const index = draft.findIndex((card) => card.id === id);
      draft[index].flipped = true;
    });
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} backgroundColor="gray.100">
          {cards.map((card) => (
            <Card key={card.id} onClick={handleClick} {...card} />
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
