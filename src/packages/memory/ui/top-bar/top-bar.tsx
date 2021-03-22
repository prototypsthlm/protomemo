import Icon from "@chakra-ui/icon";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { IoClose } from "react-icons/io5";

interface TopBarProps {
  onClose?: () => void;
  score: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  onClose = () => {},
  score,
}) => (
  <Flex justifyContent="center" alignItems="center" paddingY={8} paddingX={16}>
    <Heading size="md" marginLeft="auto">
      Your score: {score}
    </Heading>
    <Icon
      cursor="pointer"
      as={IoClose}
      marginLeft="auto"
      width={12}
      height={12}
      onClick={onClose}
    />
  </Flex>
);
