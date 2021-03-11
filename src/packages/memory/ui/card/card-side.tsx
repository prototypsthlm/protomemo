import React from "react";
import { Box } from "@chakra-ui/layout";

interface CardSideProps {
  orientation: "front" | "back";
  type: "image" | "text";
  content: string;
}

export const CardSide: React.FC<CardSideProps> = ({ content, orientation }) => {
  return (
    <Box
      minWidth="100%"
      borderRadius="3xl"
      backgroundColor="white"
      boxShadow="md"
      minHeight="100%"
      transition="0.3s box-shadow"
      _hover={{
        boxShadow: "xl",
      }}
      sx={{ backfaceVisibility: "hidden" }}
      transform={
        orientation === "back" ? "rotateX(-180deg) translate(-100%, 0)" : ""
      }
    >
      {content}
    </Box>
  );
};
