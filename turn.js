class Turn {
  constructor(players) {
    this.init(players);
  }

  init(players) {
    let playerChoice = 0;
    let possibleActions = [1, 2];
    while (!possibleActions.includes(playerChoice)) {
      playerChoice = window.prompt(`choose your next action: 1. Regular attack \n 2. Special attack`);
      playerChoice = parseInt(playerChoice, 10);
    }
    switch(playerChoice){
      case 1 : players[0].dealDamage(players[1]);
        break;
      case 2 : players[0].specialAttack(players[1]);
        break; 
    }
    if (players[1].hp > 0) {
      players[1].dealDamage(players[0]);
    }
    console.log("\n");
  }
}