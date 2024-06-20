import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
  games.push({
    whitePlayer: "leander",
    blackPlayer: "knock",
    moves: [],
  });
}, 5000);
