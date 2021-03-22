import React from "react";
import { Center, Flex } from "@chakra-ui/layout";
import { CardSide } from "./card-side";
import { Content, ImageContent } from "../../domain/content";
import { ScaleFade } from "@chakra-ui/transition";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Icon from "@chakra-ui/icon";

interface CardProps {
  id: number;
  flipped?: boolean;
  onClick?: (id: number) => void;
  front: ImageContent;
  back: Content;
  matched?: boolean;
}

export const Card: React.FC<CardProps> = ({
  flipped = false,
  matched = false,
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
      cursor="pointer"
      position="relative"
    >
      <ScaleFade initialScale={0.9} in={matched}>
        <Center
          position="absolute"
          height="100%"
          width="100%"
          zIndex={5}
          backgroundColor="whiteAlpha.500"
          borderRadius="3xl"
        >
          <Icon as={IoCheckmarkCircleOutline} w={24} h={24} color="green.500" />
        </Center>
      </ScaleFade>

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
