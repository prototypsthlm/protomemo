import React from "react";
import { Box } from "@chakra-ui/layout";

interface CardSideProps {
  orientation: "front" | "back";
}

export const CardSide: React.FC<CardSideProps> = ({
  children,
  orientation,
}) => {
  return (
    <Box
      minWidth="100%"
      borderRadius="3xl"
      backgroundColor="white"
      boxShadow="md"
      minHeight="100%"
      sx={{ backfaceVisibility: "hidden" }}
      transform={
        orientation === "back" ? "rotateX(-180deg) translate(-100%, 0)" : ""
      }
    >
      {children}
    </Box>
  );
};
