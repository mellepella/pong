class Ball {
	constructor(x, y) {
		this.starterX = x;
		this.starterY = y;
	
		this.x = x;
		this.y = y;

		this.color = 'orange';

		this.size = unitSize;

		this.velocity = 5;

		this.velocityX = this.velocity;
		this.velocityY = -this.velocity;
	}
	update() {
		this.draw();
		this.move();
		this.checkPosition();
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	move() {
		this.x += this.velocityX;
		this.y += this.velocityY;
	}
	checkPosition() {
		if(this.x + this.size > 1000) {
			Game.increaseScore(2);
			Game.restart();
		}
		else if(this.x < 0) {
			Game.increaseScore(1);
			Game.restart();
		}
		else if(this.y + this.size >= canvas.height || this.y <= 0) {
			this.changeDirection('y');
		}
		this.checkCollision();
	}
	changeDirection(axis) {
		if(axis === 'x') {
			this.velocityX = -this.velocityX;
		}
		else {
			this.velocityY = -this.velocityY;
		}
	}
	checkCollision() {
		if(this.x < playerTwo.x + playerTwo.width && this.y + this.size > playerTwo.y &&
		this.y < playerTwo.y + playerTwo.height) {
			this.changeDirection('x');
			this.x += this.velocity * 2;
			if(playerOne.height > unitSize * 3) {
				playerOne.height -= 5;
				playerTwo.height -= 5;
			}
			if(ball.velocityX < 2) {
				ball.velocityX += ball.velocityX/10;
				ball.velocityY += ball.velocityY/10;	
			}
		}
		else if(this.x + this.size > playerOne.x && this.y + this.size > playerOne.y && 
		this.y < playerOne.y + playerOne.height) {
			this.changeDirection('x');
			this.x -= this.velocity * 2;
			if(playerOne.height > unitSize * 3) {
				playerOne.height -= 5;
				playerTwo.height -= 5;
			}
			if(ball.velocityX < 2) {
				ball.velocityX += ball.velocityX/10;
				ball.velocityY += ball.velocityY/10;	
			}
		}		
	}
}