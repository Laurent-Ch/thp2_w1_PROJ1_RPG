class Game {
  constructor(players) {
    this.players = players;
    this.turnLeft = 10;

    this.init();
  }

  init() {
    while (this.turnLeft > 0) {
      this.newTurn();
    }
    console.log('Game over.')

  }

  newTurn() {
    new Turn(players);
    this.turnLeft -= 1;
  }
}
