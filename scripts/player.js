class Player {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.color = 'black';

		this.width = unitSize;
		this.height = this.width * 4;		

		this.velocity = unitSize/2;

		this.isColliding = false;
	}
	update() {
		this.draw();
		this.checkPosition();
	}
	checkCollision() {
		if(this.y < 0) {
			this.isColliding = true;

			this.y += this.velocity;

			console.log(window.innerHeight);
		}
		else if(this.y + this.height > canvas.height) {
			this.isColliding = true;

			this.y -= this.velocity;
		}
		else {
			this.isColliding = false;
		}
	}
	checkPosition() {
		this.checkCollision();
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	goUp() {
		if(this.isColliding) {
			return;
		}
		else {
			this.y -= this.velocity;
		}
	}
	goDown() {
		if(this.isColliding) {
			return;
		}
		else {
			this.y += this.velocity;
		}
	}
}