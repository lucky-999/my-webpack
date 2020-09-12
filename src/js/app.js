import Game, { GameSavingData , readGameSaving as loadGame , writeGameSaving as saveGame} from './js/game.js' ;

const game = new Game();
game.start();

console.log('app worked')