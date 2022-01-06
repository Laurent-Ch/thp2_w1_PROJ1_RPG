import Display, {DisplayButtons} from './display.js'
import Turn from './turn.js';

const INCREASING_DISPLAY = 11;

export default class Game {
  constructor(players) {
    this.players = players;
    this.turnLeft = 10;

    this.init();
  }

  init() {
    while (this.turnLeft > 0 && this.players.filter(p => p.state == "loser").length < this.players.length - 1) {
      this.newTurn();
    }
    new Display('Game over.')
    let winners = this.players.filter(p => p.state != "loser");
    winners.map(w => w.state = "winner");
    new Display(`Winner(s): ${winners.map(w => w.name)}.`);
  }

  newTurn() {
    new Display(`Turn ${INCREASING_DISPLAY - this.turnLeft} starts.`);
    new Turn(this.players);
    this.turnLeft -= 1;
  }
}


