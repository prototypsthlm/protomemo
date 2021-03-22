import React, { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
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
import { finished, Game as GameType, score } from "../../domain";
import { TopBar } from "../top-bar";
import { CloseGameAlert } from "../close-game-alert";
import { useHistory } from "react-router";
import { Celebration } from "../celebration";

interface GameProps {
  game: GameType;
}

export const Game: React.FC<GameProps> = ({ game }) => {
  const history = useHistory();
  const [cards, setCards] = useImmer<CardList>(game.deck);
  const isSecondCard = getIfSecondCard(cards);
  const match = isMatch(cards);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const currentScore = score(cards);
  const finishedGame = finished(cards);

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

  const handleEndGame = () => {
    setAlertOpen(true);
  };

  const onEndGame = () => {
    history.replace("/");
    setAlertOpen(false);
  };

  const onCancelEndGame = () => {
    setAlertOpen(false);
  };

  return (
    <Box>
      <CloseGameAlert
        isOpen={alertOpen}
        onConfirm={onEndGame}
        onCancel={onCancelEndGame}
      />
      <TopBar onClose={handleEndGame} score={currentScore} />
      <Center>
        <Deck
          cards={cards}
          cover={game.cover}
          onSelectCard={handleCardSelect}
        />
      </Center>
      {finishedGame && <Celebration onClose={onEndGame} />}
      <MatchResultSheet
        match={match}
        isOpen={isSecondCard}
        onConfirm={handleNextRound}
      />
    </Box>
  );
};
