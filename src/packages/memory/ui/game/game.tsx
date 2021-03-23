import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { MatchResultSheet } from "../match-result-sheet";
import { Deck } from "../deck";
import { Game as GameType } from "../../domain";
import { TopBar } from "../top-bar";
import { CloseGameAlert } from "../close-game-alert";
import { Celebration } from "../celebration";
import { useConfirm, useGame } from "../../hooks";

interface GameProps {
  game: GameType;
}

export const Game: React.FC<GameProps> = ({ game }) => {
  const {
    currentScore,
    finishedGame,
    match,
    isSecondCard,
    cards,
    handleCardSelect,
    handleNextRound,
    handleEndGame,
  } = useGame(game);

  const { open, handleConfirm, onCancel, setOpen } = useConfirm(handleEndGame);

  return (
    <Box>
      <CloseGameAlert
        isOpen={open}
        onConfirm={handleConfirm}
        onCancel={onCancel}
      />
      <TopBar onClose={setOpen} score={currentScore} />
      <Center>
        <Deck
          cards={cards}
          cover={game.cover}
          onSelectCard={handleCardSelect}
        />
      </Center>
      {finishedGame && <Celebration onClose={handleEndGame} />}
      <MatchResultSheet
        match={match}
        isOpen={isSecondCard}
        onConfirm={handleNextRound}
      />
    </Box>
  );
};
