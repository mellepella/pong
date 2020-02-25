const canvas = {
	'height': 500,
	'width': 100
}

const animationTime = 1;

const unitSize = 50;

const playerOne = new Player(unitSize * 18, unitSize * 3);
const playerTwo = new Player(unitSize * 1, unitSize * 3);

const ball = new Ball(unitSize * 9, unitSize * 1);

const keyPresses = {
	'w': 119,
	's': 115,
	
	'i': 105,
	'k': 107
}

class Game {
	static update() {
		this.clearCanvas();

		playerOne.update();
		playerTwo.update();

		ball.update();
	}
	static clearCanvas() {
		ctx.fillStyle = 'green';
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	}
	static detectKeypress(event) {
		if(event.charCode === keyPresses.w) {
			playerTwo.goUp();
		}
		else if(event.charCode === keyPresses.s) {
			playerTwo.goDown();
		}
		else if(event.charCode === keyPresses.i) {
			playerOne.goUp();
		}
		else if(event.charCode === keyPresses.k) {
			playerOne.goDown();
		}
	}
}


setInterval(function() {
	Game.update();
}, animationTime);
Game.update();