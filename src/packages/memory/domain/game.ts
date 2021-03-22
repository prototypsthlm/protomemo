import { shuffle } from "../../../shared";
import { GameData } from "../mock-data/mock-games";
import { ContentList, ImageContent } from "./content";
import { createDeck, Deck, matchedCards, unmatchedCards } from "./deck";
import { Level, levelConfig } from "./level";

export type Game = {
  id: string;
  title: string;
  cover: ImageContent;
  deck: Deck;
};

const pickItems = (level: Level) => (content: ContentList) =>
  shuffle(content).slice(0, levelConfig[level]);

export const generateGame = ({ data, ...otherParams }: GameData) => (
  level: Level
): Game => {
  const selectedContent = pickItems(level)(data);
  const shuffledContent = shuffle(selectedContent);
  const deck = shuffle(createDeck(shuffledContent));

  return {
    deck,
    ...otherParams,
  };
};

export const finished = (deck: Deck) => unmatchedCards(deck).length === 0;

export const score = (deck: Deck) => matchedCards(deck).length;
