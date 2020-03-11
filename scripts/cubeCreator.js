class CubeCreator {
	static createObstacle(x, y) {
		var obstacle = new ObstacleCube(x, y);

		return obstacle;
	}
	static createWinningCube(x, y) {
		var winningCube = new WinningCube(x, y);
		
		return winningCube;
	}
	static createPlayerCube(x, y) {
		var playerCube = new PlayerCube(x, y);

		return playerCube;
	}
}
