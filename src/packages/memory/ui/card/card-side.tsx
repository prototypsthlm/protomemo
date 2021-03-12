import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { ContentType } from "../../domain/content";
import { Image } from "@chakra-ui/image";

interface CardSideProps {
  orientation: "front" | "back";
  type: ContentType;
  content: string;
}

export const CardSide: React.FC<CardSideProps> = ({
  type,
  content,
  orientation,
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minWidth="100%"
      borderRadius="3xl"
      backgroundColor="white"
      boxShadow="md"
      minHeight="100%"
      overflow="auto"
      transition="0.3s box-shadow"
      _hover={{
        boxShadow: "xl",
      }}
      sx={{ backfaceVisibility: "hidden" }}
      transform={
        orientation === "back" ? "rotateX(-180deg) translate(-100%, 0)" : ""
      }
    >
      {type === ContentType.Text ? (
        <Heading textAlign="center">{content}</Heading>
      ) : (
        <Image src={content} height="100%" width="100%" objectFit="cover" />
      )}
    </Flex>
  );
};
