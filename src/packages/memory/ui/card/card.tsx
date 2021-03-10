import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { CardSide } from "./card-side";

export const Card = () => {
  return (
    <Flex sx={{ perspective: "40rem" }} height="3xs" width="3xs">
      <Flex
        flex={1}
        borderRadius="3xl"
        transition="0.5s transform"
        sx={{
          transformStyle: "preserve-3d",
          ":hover": { transform: "rotateX(-180deg)" },
        }}
      >
        <CardSide orientation="front">Front</CardSide>
        <CardSide orientation="back">Back</CardSide>
      </Flex>
    </Flex>
  );
};
