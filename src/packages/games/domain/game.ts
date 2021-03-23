export interface Game {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
}

export type GamesCollection = Game[];
