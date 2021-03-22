import React from "react";
import { Box, Center, Heading, Stack } from "@chakra-ui/layout";
import Confetti from "react-confetti";
import { Button } from "@chakra-ui/button";

interface CelebrationProps {
  onClose?: () => void;
}

export const Celebration: React.FC<CelebrationProps> = ({
  onClose = () => {},
}) => {
  return (
    <Box
      position="absolute"
      height="100vh"
      top="0"
      sx={{ backdropFilter: "blur(4px)" }}
      zIndex={5}
    >
      <Confetti />
      <Center height="100vh" width="100vw">
        <Stack direction="column" spacing={16}>
          <Heading size="4xl">You did it!</Heading>
          <Button onClick={onClose} size="lg" colorScheme="blue">
            Go back to all games
          </Button>
        </Stack>
      </Center>
    </Box>
  );
};
