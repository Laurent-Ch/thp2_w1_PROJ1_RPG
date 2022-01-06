import Game from './game.js'
import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './characters.js';
import generatePlayers from './generate_players.js'

let players = generatePlayers();
new Game(players);

