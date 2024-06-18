interface Games {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

// export const games: Games[] = [];

export class GameManager {
  games: Games[] = [];

  constructor() {
    this.games = [];
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} in gameId ${gameId}`);
    const game: any = this.games.find((games) => game.id === gameId);
    game?.moves.push(move);
  }

  
}
