import React from "react";
import { Flex } from "@chakra-ui/layout";
import { CardSide } from "./card-side";

export interface CardSideProps {
  type: "image" | "text";
  side: "front" | "back";
  content: string;
}

interface CardProps {
  id: string;
  flipped?: boolean;
  onClick?: (id: string) => void;
  sides: [CardSideProps, CardSideProps];
}

export const Card: React.FC<CardProps> = ({
  flipped = false,
  onClick = () => {},
  sides,
  id,
}) => {
  const handleClick = () => onClick(id);

  return (
    <Flex
      sx={{ perspective: "40rem" }}
      height="3xs"
      width="3xs"
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
        {sides.map((side) => (
          <CardSide
            key={side.side}
            type={side.type}
            orientation={side.side}
            content={side.content}
          />
        ))}
      </Flex>
    </Flex>
  );
};
