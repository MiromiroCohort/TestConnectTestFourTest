

var Board = function (){
	var rows = new Array (6)
	for (var i = 0; i<6; i++){
		rows[i] = new Array (7)
	};
	this.rows = rows
	this.redTurn = true
	this.colour = "red"
	this.gameScoreRed = 0;
	this.gameScoreBlue = 0;
	this.win = false
};




Board.prototype.newGame = function() {
	for (i = 0; i< 7; i++) {
		for (j = 0; j<6; j++) {
			this.rows[j][i] = null
		}
	}
	this.redTurn = true
	this.colour = "red"
	this.win = false
}


Board.prototype.playPiece = function(column) {
    for (var i in this.rows ) {
        if (!this.rows[i][column]) {
            available = i
        }
    }

    if (this.redTurn) {
    	this.colour = "red"
    	this.redTurn = false
    } else {
    	this.colour = "blue"
    	this.redTurn = true
    }
    this.rows[available][column] = this.colour
    endState = this.checkWin(available, column, this.colour)
    if (endState != -1) {
    	this.win = true
    	console.log(endState)
    }

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
		return(resultsArray)
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
		return(resultsArray)
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
		return(resultsArray)
	}

	var diagUpLeft = new Array

	//calculate the right base point on this diagonal
	startCol = col
	startRow = row
	while ((startCol < 6) && (startRow <5)) {
		startCol ++
		startRow ++
	}

	var tempRow = startRow
	var tempCol = startCol
	for (i =tempCol; i>-1; i--) {
		if (tempRow > -1) {
			diagUpLeft.push(this.rows[tempRow][i])
			tempRow --
		}
	} 

	homeCol = checkFourColours(diagUpRight, colour)
	if (homeCol > -1) {
		resultsArray.push(startRow)
		resultsArray.push(startCol)
		resultsArray.push("upLeft")
		return(resultsArray)
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
	return homeCol
}





board = new Board
console.log(board)

	board.playPiece(0)
	board.playPiece(1)
	board.playPiece(0)
	board.playPiece(1)
	board.playPiece(0)
	board.playPiece(1)
	board.playPiece(0)
	board.playPiece(1)
console.log(board)	
	board.newGame()

	board.playPiece(1)
	board.playPiece(0)
	board.playPiece(1)

console.log(board)


