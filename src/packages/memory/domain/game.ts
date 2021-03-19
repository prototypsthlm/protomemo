import { shuffle } from "../../../shared";
import { GameDataList } from "../mock-data/mock-games";
import { ContentList, ImageContent } from "./content";
import { createDeck, Deck } from "./deck";
import { Level, levelConfig } from "./level";

export type Game = {
  id: string;
  title: string;
  cover: ImageContent;
  deck: Deck;
};

const pickItems = (level: Level) => (content: ContentList) =>
  shuffle(content).slice(0, levelConfig[level]);

export const generateGame = (games: GameDataList) => (gameId: string) => (
  level: Level
): Game => {
  const { data, ...other } = games[gameId];

  const selectedContent = pickItems(level)(data);
  const shuffledContent = shuffle(selectedContent);
  const deck = shuffle(createDeck(shuffledContent));

  return {
    deck,
    ...other,
  };
};
