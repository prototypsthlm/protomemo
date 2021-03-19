import React from "react";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { GamesCollection } from "../../domain";
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";

interface GamesListProps {
  games: GamesCollection;
}

export const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <HStack spacing={32}>
      {games.map((game) => (
        <Link to={`/memory/${game.id}`}>
          <Box
            _hover={{ boxShadow: "2xl" }}
            transition="0.2s ease-in"
            boxShadow="lg"
            cursor="pointer"
            borderRadius="3xl"
            key={game.id}
            overflow="auto"
          >
            <Image src={game.cover} />
            <VStack padding={8} alignItems="flex-start">
              <Heading size="md">{game.title}</Heading>
              <Text>{game.description}</Text>
            </VStack>
          </Box>
        </Link>
      ))}
    </HStack>
  );
};
