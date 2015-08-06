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
	console.log(this.rows[row][col])
}

Board.prototype.checkWin = function (row, col, colour) {
	// if (r > 2) {  //do 'up' directions check
	// 	if ((this.rows[r-1][c] == color) && 
	// 		(this.rows[r-2][c] == color) && 
	// 		(this.rows[r-3][c] == color))
	// 		{
	// 			return ("up")
	// 		}

	// 	if (c >2) { //do left check
	// 	 	if ((this.rows[r-1][c-1] == color) && 
	// 	 	(this.rows[r-2][c-2] == color) && 
	// 	 	(this.rows[r-3][c-3] == color))
	// 	 	{
	// 	 		return ( "upleft")
	// 		}
	// 	}
	// 	if (c <4) { //do right check
	// 	 	if ((this.rows[r-1][c+1] == color) && 
	// 	 	(this.rows[r-2][c+2] == color) && 
	// 	 	(this.rows[r-3][c+3] == color))
	// 	 	{
	// 	 		return ( "upright")
	// 		}
	// 	}

	// }   REFACTORED
	var resultsArray = new Array

	var horizArray = []
	for (var i = 0; i<7; i++){
		horizArray.push(this.rows[row][i])
	}
	homeCol = checkFourColours(horizArray, colour)
	if (homeCol > -1) {
		resultsArray.push(row)
		resultsArray.push(homeCol)
		resultsArray.push("right")
		console.log(resultsArray)
	}


	var vertArray = []
	for (var i = row; i<6; i++){
		vertArray.push(this.rows[i][col])
	}
	homeCol = checkFourColours(vertArray, colour)
	if (homeCol > -1) {
		resultsArray.push(row)
		resultsArray.push(col)
		resultsArray.push("down")
		console.log(resultsArray)
	}

	var diagUpRight = []

	//calculate the left base point on this diagonal
	var startCol = col;
	var startRow = row
	while ((startCol > 0 ) && (startRow <5)) {
		startCol --
		startRow ++
	}

	var tempRow = startRow


	for (i =startCol; i<7; i++) {
		if (tempRow > -1) {
			diagUpRight.push(this.rows[tempRow][i])
			tempRow --
		}
	} 

	console.log(diagUpRight)
	homeCol = checkFourColours(diagUpRight, colour)
	if (homeCol > -1) {
		resultsArray.push(startRow)
		resultsArray.push(startCol)
		resultsArray.push("upRight")
		console.log(resultsArray)
	}



	function checkFourColours (inArray, colour) {
		var sequenceCount = 0
		var startCell = -1
		var outArray = new Array
		for (var cell = 0; cell < inArray.length; cell++) {
			if (inArray[cell] == colour) {
				if (startCell == -1) {
					startCell = cell
				}
				sequenceCount ++
				if (sequenceCount > 3) {
					return startCell
				}
			} else {
				sequenceCount = 0
				startCell = -1
			}
		}
		return -1
	}


}


function makeWinBoard() {
	board = new Board;

	for (i=0;i<6;i++) {
		for (j=0; j<7; j++) {
			board.addPiece(i,j,'....')
		}
	}

	board.addPiece(5,0,'blue')
	board.addPiece(5,2,'blue')
	board.addPiece(5,3,'blue')
	board.addPiece(4,3,'blue')
	board.addPiece(5,1,'blue')
	board.addPiece(3,1,'blue')
	board.addPiece(2,3,'blue')
	board.addPiece(4,2,'blue')
	board.addPiece(3,3,'blue')
	board.addPiece(2,4,'blue')
	board.addPiece(2,0,'blue')
	board.addPiece(4,4,'blue')
	board.addPiece(3,5,'blue')
	board.addPiece(2,6,'blue')
	


};


makeWinBoard();
console.log(board.rows)
board.checkWin(4,2,"blue")






