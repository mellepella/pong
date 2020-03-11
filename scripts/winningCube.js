class WinningCube {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.size = unitSize;

		this.color = '#f7ff63';
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
			currentScene += 1;
			Game.restart();
		}

		// Detect upper collision

		else if(this.x == playerCube.x 
		&& this.y < playerCube.y + playerCube.size 
		&& this.y + this.size > playerCube.y + playerCube.size) {
			currentScene += 1;
			Game.restart();
		}

		// Detect collision from the bottom
	
		else if(this.x == playerCube.x && this.y < playerCube.y 
		&& this.y + this.size > playerCube.y) {
			currentScene += 1;
			Game.restart();
		}
	}
}