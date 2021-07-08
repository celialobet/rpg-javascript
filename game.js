class Game {
  constructor() {
    this.turnLeft = 10;
    this.playersList = [];
    this.currentPlayer = [];
    this.playerTurnIndex = 0;
  }

  addPlayer(player) {
    this.playersList.push(player);
  }

  // shufflePlayers = (playersList) => {
  //   for (let i = playersList.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [playersList[i], playersList[j]] = [playersList[j], playersList[i]];
  //   }
  //   // return playersList;
  //   console.log(this.playersList);
  // };

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  play() {
    this.startTurn();
  }

  startTurn() {
    console.log(`It's turn ${11 - this.turnLeft}`);
    this.playersList.map((player) => {
      player.newTurn();
    });
    this.playerTurn = this.playersList.slice();
    this.playerTurnIndex = this.getRandomInt(0, this.playerTurn.length - 1);
    console.log(
      `It's time for ${this.playerTurn[this.playerTurnIndex].name} to play`
    );
  }

  newTurn() {
    if (this.turnLeft > 0 && this.playersList !== null) {
      let currentTurn = new Turn();
      currentTurn.startTurn();
      this.turnLeft--;
    } else {
      console.log(`The game is over! The winner is:`);
      this.playersList.map((player) => {
        if (player.isAlive()) {
          player.status = "winner";
        }
      });
    }
  }

  watchStats() {
    this.playersList.map((player) => {
      if (player.isAlive()) {
        console.log(
          `${player.name} Stats: HEALTH POINTS => ${player.hp}, DAMAGES => ${player.dmg}, MANA => ${player.mana}`
        );
      }
    });
  }
}

let ulder = new Paladin();
let grace = new Fighter();
let draven = new Berzerker();
let moana = new Monk();
let carl = new Assassin();
let game = new Game();

game.addPlayer(ulder);
game.addPlayer(grace);
game.addPlayer(draven);
game.addPlayer(moana);
game.addPlayer(carl);
game.play();
