import React, { useState } from "react";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Level } from "../../domain";
import { Button } from "@chakra-ui/button";

interface StartGameProps {
  onSelectLevel: (level: Level) => void;
}

export const StartGame: React.FC<StartGameProps> = ({ onSelectLevel }) => {
  const [level, setLevel] = useState<Level>(Level.Lagom);
  return (
    <Stack direction="column" spacing={8} alignItems="center">
      <Heading>Welcome to Protomemo</Heading>
      <Text>Pick a level you can handle!</Text>
      <RadioGroup
        value={level}
        onChange={(value) => setLevel(value as Level)}
        size="lg"
      >
        <Stack direction="row" spacing={8}>
          {Object.keys(Level).map((level) => (
            <Radio value={level}>{level}</Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button size="lg" colorScheme="blue" onClick={() => onSelectLevel(level)}>
        Play
      </Button>
    </Stack>
  );
};
