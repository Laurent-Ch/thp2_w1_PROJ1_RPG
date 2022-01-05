const INCREASING_DISPLAY = 11;

class Game {
  constructor(players) {
    this.players = players;
    this.turnLeft = 10;

    this.init();
  }

  init() {
    while (this.turnLeft > 0 && this.players.filter(p => p.state == "loser").length < this.players.length - 1) {
      this.newTurn();
    }
    console.log('Game over.')
    let winners = this.players.filter(p => p.state != "loser");
    winners.map(w => w.state = "winner");
    console.log(`Winner(s): ${winners.map(w => w.name)}.`);
  }

  newTurn() {
    console.log(`Turn ${INCREASING_DISPLAY - this.turnLeft} starts.`);
    new Turn(players);
    this.turnLeft -= 1;
  }
}


