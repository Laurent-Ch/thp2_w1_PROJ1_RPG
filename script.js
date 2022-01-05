let playingCharacterName = window.prompt("Hello! What's your name?");

let possibleClasses = ['Fighter', 'Paladin', 'Monk', 'Berzerker', 'Assassin'];
let possibleClassesInt = [1, 2, 3, 4, 5];
let playingCharacterClassInt = 0;

while (!possibleClassesInt.includes(playingCharacterClassInt)) {
  playingCharacterClassInt = window.prompt (`Welcome ${playingCharacterName}! There are 5 available classes: \n 1. Fighter \n 2. Paladin \n 3. Monk \n 4. Berzerker \n 5. Assassin \n Put the number of the class you want to play with.`);
  playingCharacterClassInt = parseInt(playingCharacterClassInt, 10);
}

let playingCharacterClass = possibleClasses[playingCharacterClassInt - 1];
console.log(`${playingCharacterName}, you'll be playing a(n) ${playingCharacterClass} against one random opponent.`);

function createCharacter(classInt) {
  switch(classInt) {
    case 1:
      return new Fighter;
      break
    case 2:
      return new Paladin;
      break
    case 3:
      return new Monk;
      break
    case 4:
      return new Berzerker;
      break
    case 5:
      return new Assassin;
      break
  }
}

let playingCharacter = createCharacter(playingCharacterClassInt);
playingCharacter.name = playingCharacterName;
console.log(playingCharacter);

let npcClassInt = Math.floor(Math.random() * 5 + 1);
let npcCharacter = createCharacter(npcClassInt);
console.log(npcCharacter);

let gamePlayers = [playingCharacter, npcCharacter];
console.log(gamePlayers)

new Game(gamePlayers);