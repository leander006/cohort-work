import { stratLogger } from "./logger";
import { games } from "./store";

stratLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "Alice",
    blackPlayerName: "Bob",
    moves: [],
  });
}, 5000);
