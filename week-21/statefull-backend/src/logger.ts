import { games } from "./store";

export function stratLogger() {
  setInterval(() => {
    console.log(games);
  }, 3000);
}
