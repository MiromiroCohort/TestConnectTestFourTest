var Board = function(color, column) {
	var rows = new Array(6);
		for (var i = 0; i < 6; i++) {
		rows[i] = new Array(7);
	this.board = rows;
	this.color = color;
	this.column = column;
	};
};


Board.prototype.rowsColumns = function() {
	console.log(this.board)
}


Board.prototype.playPiece = function() {
	console.log(this.color)
	console.log(this.column)
	console.log(this.board)


}

board = new Board('blue', 1);
board.rowsColumns();
board.playPiece();
