import React from "react";
import { Flex } from "@chakra-ui/layout";
import { CardSide } from "./card-side";
import { Content, ImageContent } from "../../domain/content";

interface CardProps {
  id: number;
  flipped?: boolean;
  onClick?: (id: number) => void;
  front: ImageContent;
  back: Content;
}

export const Card: React.FC<CardProps> = ({
  flipped = false,
  onClick = () => {},
  front,
  back,
  id,
}) => {
  const handleClick = () => onClick(id);

  return (
    <Flex
      sx={{ perspective: "40rem" }}
      height={48}
      width={48}
      onClick={handleClick}
    >
      <Flex
        flex={1}
        borderRadius="3xl"
        transition="0.5s transform"
        transform={flipped ? "rotateX(-180deg)" : "rotateX(0)"}
        sx={{
          transformStyle: "preserve-3d",
        }}
      >
        <CardSide
          type={front.type}
          orientation="front"
          content={front.content}
        />
        <CardSide type={back.type} orientation="back" content={back.content} />
      </Flex>
    </Flex>
  );
};
