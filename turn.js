class Turn {
  constructor(players) {
    this.init(players);
  }

  init(players) {
    players[0].dealDamage(players[1]);
    if (players[1].hp > 0) {
      players[1].dealDamage(players[0]);
    }
    console.log("\n");
  }
}