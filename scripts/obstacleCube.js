class ObstacleCube {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	
		this.size = unitSize;

		this.color = 'black';
	}
	update() {
		this.draw();
		this.detectCollision();
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	detectCollision() {
		
		// Detect collision from right and left
		
		if(this.x < playerCube.x + playerCube.size 
		&& this.x + this.size > playerCube.x 
		&& this.y == playerCube.y) {
			playerCube.stop(playerCube.x - playerCube.velocityX, playerCube.y);
		}

		// Detect upper collision

		else if(this.x == playerCube.x 
		&& this.y < playerCube.y + playerCube.size 
		&& this.y + this.size > playerCube.y + playerCube.size) {

			playerCube.stop(playerCube.x, playerCube.y - playerCube.velocityY);
		}

		// Detect collision from the bottom
	
		else if(this.x == playerCube.x 
		&& this.y < playerCube.y 
		&& this.y + this.size > playerCube.y) {
			
			playerCube.stop(playerCube.x, playerCube.y - playerCube.velocityY);
		}
	}
}