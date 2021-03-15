import React from "react";
import { SimpleGrid, Center, Button, Slide } from "@chakra-ui/react";
import { Card } from "../card";
import { useImmer } from "use-immer";
import { Card as CardModel, CardList } from "../../domain/card";
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

  const getIfSecondCard = (cards: CardList) =>
    newlyFlippedCards(cards).length > 1;

  const isSecondCard = getIfSecondCard(cards);

  const cardsMatch = (cards: CardList) =>
    cards.every((card, index, array) => card.id === array[0].id);

  const match = isSecondCard && cardsMatch(newlyFlippedCards(cards));

  const resetCards = (cards: CardList) =>
    cards.map<CardModel>((card) =>
      isNewlyFlippedCard(card) ? { ...card, flipped: false } : card
    );

  const setMatchedCards = (cards: CardList) =>
    cards.map<CardModel>((card) =>
      isNewlyFlippedCard(card) ? { ...card, matched: true } : card
    );

  const handleClick = (index: number) => {
    if (isSecondCard) {
      return;
    }
    setCards((draft) => {
      draft[index].flipped = true;
    });
  };

  const handleNextRound = () => {
    if (match) {
      setCards(() => setMatchedCards(cards));
    } else {
      setCards(() => resetCards(cards));
    }
  };

  return (
    <Center bgColor="gray.100">
      <SimpleGrid columns={5} spacing={8} p={3} maxWidth="6xl">
        {cards.map(({ flipped, content, type, matched }, index) => (
          <Card
            matched={matched}
            flipped={flipped}
            key={index}
            onClick={handleClick}
            front={cover}
            back={{ content, type }}
            id={index}
          />
        ))}
      </SimpleGrid>
      <Slide direction="bottom" in={isSecondCard} style={{ zIndex: 10 }}>
        <Center
          backgroundColor={match ? "green.100" : "red.100"}
          // sx={{ backdropFilter: "blur(10px)" }}
          height="2xs"
          width="100%"
        >
          <Button
            size="lg"
            colorScheme={match ? "green" : "red"}
            onClick={handleNextRound}
          >
            {match ? "Continue" : "Try again"}
          </Button>
        </Center>
      </Slide>
    </Center>
  );
};
