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
    <Center>
      <SimpleGrid columns={6} spacing={8} p={2} maxWidth="7xl">
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
