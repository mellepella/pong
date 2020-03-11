
class PlayerCube {
	constructor(startX, startY) {
		this.color = 'orange';

		this.startX = startX;
		this.startY = startY;
	
		this.x = startX;
		this.y = startY;
	
		this.size = unitSize;

		this.velocityX = 0;
		this.velocityY = 0;

		this.isMoving = false;
	
		this.isColliding = false;
		
		this.moveDirection;
	}
	update() {
		this.draw();
		this.move();
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	move() {
		this.x += this.velocityX;
		this.y += this.velocityY;
		
		if(this.x >= canvasWidth - this.size || this.x <= 0 || this.y >= canvasHeight - this.size || this.y <= 0) {
			Game.restart();
			this.isColliding = false;
		}
	}
	stop(x, y) {
		this.x = x;
		this.y = y;

		this.velocityX = 0;
		this.velocityY = 0;
				
		this.isColliding = true;

		this.isMoving = false;
	}	
	goUp() {
		if(this.isMoving) {
			return;
		}
		else {
			this.velocityY = -playerVelocity;
			this.isMoving = true;
			this.moveDirection = 'up';
		}
	}
	goDown() {
		if(this.isMoving) {
			return;
		}
		else {
			this.velocityY = playerVelocity;
			this.isMoving = true;
			this.moveDirection = 'down';
		}
	}
	goLeft() {
		if(this.isMoving) {
			return;
		}
		else {
			this.velocityX = -playerVelocity;
			this.isMoving = true;
			this.moveDirection = 'left';
		}
		
	}
	goRight() {
		if(this.isMoving) {
			return;
		}
		else {
			this.velocityX = playerVelocity;
			this.isMoving = true;
			this.moveDirection = 'right';
		}
	}
}