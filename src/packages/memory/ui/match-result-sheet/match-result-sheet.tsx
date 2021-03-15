import React from "react";
import { Slide, Center, VStack, Heading, Button } from "@chakra-ui/react";

interface MatchResultSheetProps {
  match?: boolean;
  isOpen?: boolean;
  onConfirm?: () => void;
}

export const MatchResultSheet: React.FC<MatchResultSheetProps> = ({
  isOpen = false,
  match,
  onConfirm,
}) => {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Center
        backgroundColor={match ? "green.100" : "red.100"}
        // sx={{ backdropFilter: "blur(10px)" }}
        height="3xs"
        width="100%"
      >
        <VStack spacing={8}>
          <Heading color={match ? "green.800" : "red.800"}>
            {match ? "It's a match!" : "Not a match!"}
          </Heading>
          <Button
            size="lg"
            colorScheme={match ? "green" : "red"}
            onClick={onConfirm}
          >
            {match ? "Continue" : "Try again"}
          </Button>
        </VStack>
      </Center>
    </Slide>
  );
};
