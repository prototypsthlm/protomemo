export enum ContentType {
  Text = "Text",
  Image = "Image",
}

export interface TextContent {
  type: ContentType.Text;
  content: string;
}

export interface ImageContent {
  type: ContentType.Image;
  content: string;
}

export type Content = TextContent | ImageContent;

export type ContentPair = [Content, Content];

export type ContentList = ContentPair[];
