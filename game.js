import Character, {Fighter, Paladin, Monk, Berzerker, Assassin} from './characters.js';
import Display, {DisplayButtons} from './display.js'
import Turn from './turn.js';

const INCREASING_DISPLAY = 11;

export default class Game {
  constructor() {
    this.players = [];
    this.turnLeft = 10;

    this.generatePlayers();
  }

  generatePlayers() {
    new Display("Welcome, Hero!");
    let playingCharacterName = "Hero";
    new Display("There are 5 available classes: \n 1. Fighter \n 2. Paladin \n 3. Monk \n 4. Berzerker \n 5. Assassin \n Choose the class you want to play with.`);")
    new DisplayButtons([
      {text: "Fighter", action: () => this.createCharacter(0)},
      {text: "Paladin", action: () =>  this.createCharacter(1)},
      {text: "Monk", action: () => this.createCharacter(2)},
      {text: "Berzerker", action: () => this.createCharacter(3)},
      {text: "Assassin", action: () => this.createCharacter(4)},
      {text: "Start Game", action: () => this.init()}
    ]);
    }

  createCharacter(int) {
    switch(int) {
      case 0:
        this.players.push(new Fighter);
        break
      case 1:
        this.players.push(new Paladin);
        break
      case 2:
        this.players.push(new Monk);
        break
      case 3:
        this.players.push(new Berzerker);
        break
      case 4:
        this.players.push(new Assassin);
        break
    }
  }

  init() {
    this.newTurn();
  }
    
  newTurn() {
    new Display(`Turn ${INCREASING_DISPLAY - this.turnLeft} starts.`);
    new Turn(this);
    this.turnLeft -= 1;
  }

  gameStillOngoing() {
    if (this.turnLeft > 0 && this.players.filter(p => p.state == "loser").length < this.players.length - 1) {
      return true;
    }
    else {
      return false;
    }
  }

  gameOver() {
    new Display('Game over.')
    let winners = this.players.filter(p => p.state != "loser");
    winners.map(w => w.state = "winner");
    new Display(`Winner(s): ${winners.map(w => w.name)}.`);
  }
}

// Test Snippet 1
// let toto = new DisplayButtons([{text:"1", action: action1}, {text:"2",action: action2}, {text:"3",action: action3}]);

// Test Snippet 2
// function action1(){
//   new Display("ACTION 1")
// }
// function action2(){
//   new Display("ACTION 2")
// }
// function action3(){
//   new Display("ACTION 3")
// }

//----------------------------------------------------------------------------//

// Stored old Snippets
// let possibleClasses = ['Fighter', 'Paladin', 'Monk', 'Berzerker', 'Assassin'];
// let possibleClassesInt = [1, 2, 3, 4, 5];
// let playingCharacterClassInt = 0; 

// while (!possibleClassesInt.includes(playingCharacterClassInt)) {
//   playingCharacterClassInt = window.prompt (`Welcome ${playingCharacterName}! 
//   playingCharacterClassInt = parseInt(playingCharacterClassInt, 10);
// }

// let playingCharacterClass = possibleClasses[playingCharacterClassInt - 1];
// new Display(`${playingCharacterName}, you'll be playing a(n) ${playingCharacterClass} against one random opponent.`);

// let playingCharacter = createCharacter(playingCharacterClassInt);
// playingCharacter.name = playingCharacterName;


