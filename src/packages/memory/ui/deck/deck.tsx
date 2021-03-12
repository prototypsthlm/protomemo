import React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { Card } from "../card";
import { useImmer } from "use-immer";
import { Card as CardModel, CardList, ImageCard } from "../../domain/card";
import { ImageContent } from "../../domain/content";

interface DeckProps {
  cards: CardList;
  cover: ImageContent;
}

export const Deck: React.FC<DeckProps> = ({ cards: initialCards, cover }) => {
  const [cards, setCards] = useImmer<CardList>(initialCards);

  const isNewlyFlippedCard = (card: CardModel) => card.flipped && !card.matched;
  const newlyFlippedCards = (cards: CardList) =>
    cards.filter(isNewlyFlippedCard);
  const isThirdCard = (cards: CardList) => newlyFlippedCards(cards).length > 1;

  const cardsMatch = (cards: CardList) =>
    cards.every((card, index, array) => card.id === array[0].id);

  const resetCards = (cards: CardList) =>
    cards.map<CardModel>((card) =>
      isNewlyFlippedCard(card) ? { ...card, flipped: false } : card
    );

  const handleClick = (index: number) => {
    const newCards = newlyFlippedCards(cards);
    if (isThirdCard(cards)) {
      return;
    }
    setCards((draft) => {
      draft[index].flipped = true;
    });

    console.log("second");
    if (cardsMatch(newCards)) {
      return;
    } else {
      setCards((draft) => {
        draft = resetCards(cards);
      });
      return;
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <Center bgColor="gray.100">
        <SimpleGrid columns={5} spacing={8} p={3} maxWidth="6xl">
          {cards.map(({ flipped, content, type }, index) => (
            <Card
              flipped={flipped}
              key={index}
              onClick={handleClick}
              front={cover}
              back={{ content, type }}
              id={index}
            />
          ))}
        </SimpleGrid>
      </Center>
    </ChakraProvider>
  );
};
