const canvas = {
  height: 500,
  width: 100,
};

const font = "Impact";

const fontWeight = "lighter";

let backgroundColor = "#d4d4d4";

const animationTime = 20;

const unitSize = 50;

const playerOne = new Player(unitSize * 18, unitSize * 3);
const playerTwo = new Player(unitSize * 1, unitSize * 3);

const ball = new Ball(Math.random() * 600, Math.random() * 200);

let playerOneScore = 0;
let playerTwoScore = 0;

const keyPresses = {
  w: 119,
  s: 115,

  i: 105,
  k: 107,
};

class Game {
  static update() {
    this.clearCanvas();

    playerOne.update();
    playerTwo.update();

    ball.update();

    UserInterface.displayText(
      unitSize * 16,
      unitSize * 2,
      playerOneScore,
      "60",
      font
    );
    UserInterface.displayText(
      unitSize * 3,
      unitSize * 2,
      playerTwoScore,
      "60",
      font
    );
  }
  static clearCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }
  static detectKeypress(event) {
    if (event.charCode === keyPresses.w) {
      playerTwo.goUp();
    } else if (event.charCode === keyPresses.s) {
      playerTwo.goDown();
    } else if (event.charCode === keyPresses.i) {
      playerOne.goUp();
    } else if (event.charCode === keyPresses.k) {
      playerOne.goDown();
    }
  }
  static increaseScore(player) {
    if (player === 1) {
      playerOneScore += 1;
    } else {
      playerTwoScore += 1;
    }
  }
  static restart() {
    playerOne.height = unitSize * 4;
    playerTwo.height = unitSize * 4;

    playerOne.y = playerOne.starterY;
    playerTwo.y = playerTwo.starterY;

    ball.x = Math.random() * 600;
    ball.y = Math.random() * 200;

    ball.velocityX = ball.velocity;
    ball.velocityY = ball.velocity;
  }
}

setInterval(function () {
  Game.update();
}, animationTime);
Game.update();
