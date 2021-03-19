import React from "react";
import { SimpleGrid, Center } from "@chakra-ui/react";
import { Card } from "../card";
import { Deck as CardList } from "../../domain/deck";
import { ImageContent } from "../../domain/content";

interface DeckProps {
  cards: CardList;
  cover: ImageContent;
  onSelectCard: (index: number) => void;
}

export const Deck: React.FC<DeckProps> = ({ cards, cover, onSelectCard }) => {
  return (
    <Center bgColor="gray.100">
      <SimpleGrid columns={5} spacing={8} p={3} maxWidth="6xl">
        {cards.map(({ flipped, content, type, matched }, index) => (
          <Card
            matched={matched}
            flipped={flipped}
            key={index}
            onClick={(index) => onSelectCard(index)}
            front={cover}
            back={{ content, type }}
            id={index}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
};
