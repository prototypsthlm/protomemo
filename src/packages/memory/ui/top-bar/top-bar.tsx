import Icon from "@chakra-ui/icon";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { IoClose } from "react-icons/io5";

export const TopBar: React.FC = () => (
  <Flex justifyContent="center" alignItems="center" paddingY={8} paddingX={16}>
    <Heading size="md" marginLeft="auto">
      Your score: 100
    </Heading>
    <Icon as={IoClose} marginLeft="auto" width={12} height={12} />
  </Flex>
);
