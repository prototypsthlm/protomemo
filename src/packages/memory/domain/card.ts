import { shuffle } from "../../../shared";
import { ContentList, ContentPair, ImageContent, TextContent } from "./content";
import { Level } from "./level";

export interface TextCard extends TextContent {
  id: number;
  flipped: boolean;
  matched: boolean;
}

export interface ImageCard extends ImageContent {
  id: number;
  flipped: boolean;
  matched: boolean;
}

export type Card = TextCard | ImageCard;

export type CardList = Card[];

export const levelConfig: Record<Level, number> = {
  "Duh!": 6,
  Lagom: 10,
  Mastery: 16,
};

const pickItems = (level: Level) => (content: ContentList) =>
  shuffle(content).slice(0, levelConfig[level]);

const createCardsFromContentPair = (index: number) => (
  pair: ContentPair
): Card[] =>
  pair.map((content) => ({
    id: index,
    flipped: false,
    matched: false,
    ...content,
  }));

const createCardList = (list: ContentList): CardList => {
  return list.reduce<CardList>((accum, listItem, index) => {
    const cardPair = createCardsFromContentPair(index)(listItem);
    return accum.concat(cardPair);
  }, []);
};

export const generateGame = (list: ContentList) => (level: Level) => {
  const selectedContent = pickItems(level)(list);
  const shuffledContent = shuffle(selectedContent);
  return shuffle(createCardList(shuffledContent));
};
