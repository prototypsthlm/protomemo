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
  enum State {
    matched,
    failed,
  }

  const state = match ? State.matched : State.failed;

  interface Config {
    bgColor: string;
    buttonColor: string;
    headingColor: string;
    heading: string;
    buttonLabel: string;
  }

  const configMap: Record<State, Config> = {
    [State.matched]: {
      bgColor: "green.100",
      buttonColor: "green",
      headingColor: "green.800",
      heading: "It's a match!",
      buttonLabel: "Continue",
    },
    [State.failed]: {
      bgColor: "red.100",
      buttonColor: "red",
      headingColor: "red.800",
      heading: "Not a match!",
      buttonLabel: "Try again",
    },
  };

  const config = configMap[state];

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Center
        backgroundColor={config.bgColor}
        // sx={{ backdropFilter: "blur(10px)" }}
        height="3xs"
        width="100%"
      >
        <VStack spacing={8}>
          <Heading color={config.headingColor}>{config.heading}</Heading>
          <Button
            size="lg"
            colorScheme={config.buttonColor}
            onClick={onConfirm}
          >
            {config.buttonLabel}
          </Button>
        </VStack>
      </Center>
    </Slide>
  );
};
