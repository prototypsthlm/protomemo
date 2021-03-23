import React from "react";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";
import { Tag } from "@chakra-ui/tag";
import { Game } from "../../domain";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/games/${game.id}`}>
      <Box
        _hover={{ boxShadow: "2xl" }}
        transition="0.2s ease-in"
        bgColor="white"
        maxWidth="lg"
        boxShadow="lg"
        cursor="pointer"
        borderRadius="3xl"
        key={game.id}
        overflow="auto"
      >
        <Image src={game.cover} />
        <VStack padding={8} alignItems="flex-start">
          <Stack direction="row" marginBottom={2}>
            {game.tags.map((tag) => (
              <Tag key={tag} size="lg" variant="solid" colorScheme="pink">
                {tag}
              </Tag>
            ))}
          </Stack>
          <Heading size="lg">{game.title}</Heading>
          <Text fontSize="lg" color="gray.600">
            {game.description}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};
