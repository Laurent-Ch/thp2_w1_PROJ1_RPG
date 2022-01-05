class Turn {
  constructor(players) {
  
    this.init(players);
  }

  init(players) {
    players[0].dealDamage(players[1]);
    console.log(`${players[1].name} has ${players[1].hp} left.`)
    players[1].dealDamage(players[0]);
    console.log(`${players[0].name} has ${players[0].hp} left.`)
  }
}