import { ContentList, ContentType, ImageContent } from "../domain";
import { PrototypGangMock } from "./prototyp-gang";
import { IkeaStuff } from "./ikea-stuff";
export type GameData = {
  id: string;
  title: string;
  cover: ImageContent;
  data: ContentList;
};

export type GameDataList = Record<string, GameData>;

export const mockGames: GameDataList = {
  protomemo: {
    id: "protomemo",
    title: "Protomemo",
    cover: {
      type: ContentType.Image,
      content:
        "https://images.ctfassets.net/hjzae6fpsq6v/3XhlMmZzpXKnz9zScNzHNv/a5bd3808c87f4f17860100e9d11ff754/Artboard.jpg",
    },
    data: PrototypGangMock,
  },
  "ikea-o-rama": {
    id: "protomemo",
    title: "Ikea-o-rama",
    cover: {
      type: ContentType.Image,
      content:
        "https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk-1200-80.jpg",
    },
    data: IkeaStuff,
  },
};
