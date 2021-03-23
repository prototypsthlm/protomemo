import { useHistory } from "react-router";
import { useImmer } from "use-immer";
import {
  Deck,
  finished,
  Game,
  getIfSecondCard,
  isMatch,
  resetCards,
  score,
  setMatchedCards,
} from "../domain";

export const useGame = (game: Game) => {
  const history = useHistory();
  const [cards, setCards] = useImmer<Deck>(game.deck);

  const isSecondCard = getIfSecondCard(cards);
  const match = isMatch(cards);
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
    return history.replace("/");
  };

  return {
    match,
    isSecondCard,
    currentScore,
    finishedGame,
    cards,
    handleCardSelect,
    handleNextRound,
    handleEndGame,
  };
};
