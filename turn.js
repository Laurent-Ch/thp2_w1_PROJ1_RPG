import Display, {DisplayButtons} from './display.js'

export default class Turn {
  constructor(game) {
    this.game = game;
    this.players = game.players;
    this.init();
  }

  init() {
    new Display(`Choose your next action: 1. Regular attack \n 2. Special attack`);
    new DisplayButtons([
      {text: "Regular", action: () => {
        this.players[0].dealDamage(this.players[1]);
        this.enemyRetaliates(this.players[1], this.players[0]);
      }}, 
      {text: "Special", action: () => {
        this.players[0].specialAttack(this.players[1]);
        this.enemyRetaliates(this.players[1], this.players[0]);
      }}
    ]);
  }

  enemyRetaliates(actor ,target) {
    if (actor.hp > 0) {
      actor.dealDamage(target);
    }
    console.log(this.game.constructor);
    this.game.gameStillOngoing() ? this.game.newTurn() : this.game.gameOver();
  }
}

// Old seeStats function
// let seeStats = window.prompt("Press S to see the players' stats or any other key to continue.");
//     seeStats = seeStats.toUpperCase();
//     if (seeStats === "S") {
//       players.map(p => new Display(`${p.name}: ${p.hp} hp, ${p.mana} mana.`));
//     }