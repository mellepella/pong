class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.color = 'orange';

		this.size = unitSize;

		this.velocity = 5;

		this.velocityX = this.velocity;
		this.velocityY = this.velocity;
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
		if(this.x + this.size > 1000 || this.x < 0) {
			this.changeDirection('x');
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
		if(this.x < playerTwo.x + playerTwo.width && this.y + this.size > playerTwo.y && this.y < playerTwo.y + playerTwo.height) {
			this.changeDirection('x');
		}
		else if(this.x + this.size > playerOne.x && this.y + this.size > playerOne.y && this.y < playerOne.y + playerOne.height) {
			this.changeDirection('x');
		}		
	}
}