import React, { useState } from "react";
import { Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Level } from "../../domain";
import { Button } from "@chakra-ui/button";

interface StartGameProps {
  onSelectLevel: (level: Level) => void;
  gameTitle: string;
}

export const StartGame: React.FC<StartGameProps> = ({
  onSelectLevel,
  gameTitle,
}) => {
  const [level, setLevel] = useState<Level>(Level.Lagom);
  return (
    <Center height="100vh">
      <Stack direction="column" spacing={8} alignItems="center">
        <Heading size="lg">Welcome to {gameTitle}</Heading>
        <Text fontSize="lg">Pick a level you can handle!</Text>
        <RadioGroup
          value={level}
          onChange={(value) => setLevel(value as Level)}
          size="lg"
        >
          <Stack direction="row" spacing={8}>
            {Object.keys(Level).map((level) => (
              <Radio value={level} colorScheme="pink">
                {level}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <Button
          size="lg"
          colorScheme="pink"
          onClick={() => onSelectLevel(level)}
        >
          Play
        </Button>
      </Stack>
    </Center>
  );
};
