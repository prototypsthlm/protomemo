import React from "react";
import { useParams } from "react-router";
import { GameLayout } from "../packages/memory";

export const MemoryPage: React.FC = () => {
  let { gameId } = useParams<{ gameId: string }>();
  return <GameLayout gameId={gameId} />;
};
