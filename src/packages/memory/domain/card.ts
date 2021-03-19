import { shuffle } from "../../../shared";
import { ContentList, ContentPair, ImageContent, TextContent } from "./content";
import { Level, levelConfig } from "./level";

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

export const isNewlyFlippedCard = (card: Card) => card.flipped && !card.matched;

export const createCardsFromContentPair = (index: number) => (
  pair: ContentPair
): Card[] =>
  pair.map((content) => ({
    id: index,
    flipped: false,
    matched: false,
    ...content,
  }));
