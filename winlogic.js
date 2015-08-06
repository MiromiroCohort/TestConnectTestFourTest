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
	
	var resultsArray = new Array

	//check horizontal win
	var horizArray = new Array
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

	//check vertical win
	var vertArray = new Array
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

	var diagUpRight = new Array
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
	homeCol = checkFourColours(diagUpRight, colour)
	if (homeCol > -1) {
		resultsArray.push(startRow)
		resultsArray.push(startCol)
		resultsArray.push("upRight")
		console.log(resultsArray)
	}

	var diagUpLeft = new Array

	//calculate the right base point on this diagonal
	startCol = col
	startRow = row
	while ((startCol < 6) && (startRow <5)) {
		startCol ++
		startRow ++
	}
	console.log(startRow + "" + startCol)

	var tempRow = startRow
	var tempCol = startCol
	for (i =tempCol; i>-1; i--) {
		if (tempRow > -1) {
			console.log(tempRow + " " + i)
			console.log(this.rows[tempRow][i])
			diagUpLeft.push(this.rows[tempRow][i])
			tempRow --
		}
	} 

	homeCol = checkFourColours(diagUpRight, colour)
	if (homeCol > -1) {
		resultsArray.push(startRow)
		resultsArray.push(startCol)
		resultsArray.push("upLeft")
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






