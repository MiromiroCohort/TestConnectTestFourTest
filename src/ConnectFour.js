var Board = function() {
	var rows = new Array(6);
		for (var i = 0; i < 6; i++) {
		rows[i] = new Array(7);
	this.board = rows;

	};
};

	Board.prototype.addPiece = function(row, color) {
		this.board[0][row] = color
}

Board.prototype.rowsColumns = function() {
}


Board.prototype.playPiece = function(color, column) {
	for (var i in this.board ) {
		if (!this.board[i][column]) {
			available = i
		}
	}
	this.board[available][column] = color
}

board = new Board;


