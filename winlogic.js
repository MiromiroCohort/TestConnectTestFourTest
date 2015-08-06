var Board = function (){
	var rows = new Array (6)
	for (var i = 0; i<6; i++){
		rows[i] = new Array (7)
	};
	this.rows = rows
};



Board.prototype.addPiece = function (row, col, color) {
	this.rows[row][col] = color
}

Board.prototype.showPiece = function (row, col) {
	console.log(this.rowsColumns[row,col])
}

board = new Board;

for (i=0;i<6;i++) {
	for (j=0; j<7; j++) {
		board.addPiece(i,j,'....')
	}
}


board.addPiece(5,0,'blue')
board.addPiece(5,1,'blue')
board.addPiece(5,2,'blue')
board.addPiece(5,3,'blue')


board.addPiece(4,1,'blue')
board.addPiece(4,2,'blue')
board.addPiece(3,1,'blue')
board.addPiece(2,1,'blue')
board.addPiece(3,2,'blue')
board.addPiece(2,3,'blue')
board.addPiece(2,0,'blue')













