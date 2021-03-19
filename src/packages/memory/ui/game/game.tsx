import React from "react";
import { Center } from "@chakra-ui/react";
import { useImmer } from "use-immer";
import {
  Deck as CardList,
  getIfSecondCard,
  isMatch,
  setMatchedCards,
  resetCards,
} from "../../domain/deck";
import { MatchResultSheet } from "../match-result-sheet";
import { Deck } from "../deck";
import { Game as GameType } from "../../domain";

interface GameProps {
  game: GameType;
}

export const Game: React.FC<GameProps> = ({ game }) => {
  const [cards, setCards] = useImmer<CardList>(game.deck);
  const isSecondCard = getIfSecondCard(cards);
  const match = isMatch(cards);

  const handleCardSelect = (index: number) => {
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
      <Deck cards={cards} cover={game.cover} onSelectCard={handleCardSelect} />
      <MatchResultSheet
        match={match}
        isOpen={isSecondCard}
        onConfirm={handleNextRound}
      />
    </Center>
  );
};
