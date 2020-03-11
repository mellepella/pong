class UserInterface {
    static displayText(x, y, textSize, text) {
		ctx.fillStyle = 'black';
		ctx.font = `${textSize} ${font}`;
		ctx.fillText(text, x, y);
	}
}