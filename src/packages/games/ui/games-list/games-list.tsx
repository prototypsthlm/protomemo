import React from "react";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { GamesCollection } from "../../domain";
import { Image } from "@chakra-ui/image";

interface GamesListProps {
  games: GamesCollection;
}

export const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <HStack spacing={32}>
      {games.map((game) => (
        <Box
          _hover={{ boxShadow: "2xl" }}
          transition="0.2s ease-in"
          boxShadow="lg"
          cursor="pointer"
          borderRadius="3xl"
          key={game.title}
          overflow="auto"
        >
          <Image src={game.cover} />
          <VStack padding={8} alignItems="flex-start">
            <Heading size="md">{game.title}</Heading>
            <Text>{game.description}</Text>
          </VStack>
        </Box>
      ))}
    </HStack>
  );
};
