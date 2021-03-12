import { shuffle } from "../../../shared";
import { ContentList, ContentPair, ImageContent, TextContent } from "./content";

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

const createCardsFromContentPair = (index: number) => (
  pair: ContentPair
): Card[] =>
  pair.map((content) => ({
    id: index,
    flipped: false,
    matched: false,
    ...content,
  }));

export const createCardList = (list: ContentList): CardList => {
  return list.reduce<CardList>((accum, listItem, index) => {
    const cardPair = createCardsFromContentPair(index)(listItem);
    return accum.concat(cardPair);
  }, []);
};

export const shuffleCardList = (cardList: CardList) => shuffle(cardList);
