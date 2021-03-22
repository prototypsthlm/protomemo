import { Card, createCardsFromContentPair, isNewlyFlippedCard } from "./card";
import { ContentList } from "./content";

export type Deck = Card[];

export const createDeck = (list: ContentList): Deck => {
  return list.reduce<Deck>((accum, listItem, index) => {
    const cardPair = createCardsFromContentPair(index)(listItem);
    return accum.concat(cardPair);
  }, []);
};

const newlyFlippedCards = (deck: Deck) => deck.filter(isNewlyFlippedCard);

export const getIfSecondCard = (deck: Deck) =>
  newlyFlippedCards(deck).length > 1;

export const matchedCards = (deck: Deck) => deck.filter((card) => card.matched);

export const unmatchedCards = (deck: Deck) =>
  deck.filter((card) => !card.matched);

export const resetCards = (deck: Deck) =>
  deck.map<Card>((card) =>
    isNewlyFlippedCard(card) ? { ...card, flipped: false } : card
  );

export const setMatchedCards = (deck: Deck) =>
  deck.map<Card>((card) =>
    isNewlyFlippedCard(card) ? { ...card, matched: true } : card
  );

const cardsMatch = (deck: Deck) =>
  deck.every((card, index, array) => card.id === array[0].id);

export const isMatch = (deck: Deck) =>
  getIfSecondCard(deck) && cardsMatch(newlyFlippedCards(deck));
