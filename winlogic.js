
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
	this.win = false;
	this.winResult = []
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
    	this.winResult = showResult(endState)
    }
    return available;

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

	homeCol = checkFourColours(diagUpLeft, colour)
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


function showResult(inArray) {
	var winLine = []
	var startRow = parseInt(inArray[0])
	var startCol = parseInt(inArray[1])
	var direction = inArray[2]
	switch(direction) {
	    case "down":
	    	winLine.push(startRow)
	    	winLine.push(startCol)
	    	winLine.push(startRow +1)
	    	winLine.push(startCol)
	    	winLine.push(startRow +2)
	    	winLine.push(startCol)
	    	winLine.push(startRow +3)
	    	winLine.push(startCol)
	        break;
	    case "right":
	    	winLine.push(startRow)
	    	winLine.push(startCol)
	    	winLine.push(startRow)
	    	winLine.push(startCol +1)
	    	winLine.push(startRow)
	    	winLine.push(startCol +2)
	    	winLine.push(startRow)
	    	winLine.push(startCol +3)
	        break;
	    case "upLeft":
	    	winLine.push(startRow)
	    	winLine.push(startCol)
	    	winLine.push(startRow -1)
	    	winLine.push(startCol -1)
	    	winLine.push(startRow -2)
	    	winLine.push(startCol -2)
	    	winLine.push(startRow -3)
	    	winLine.push(startCol -3)
	    	break;
	    case "upRight":
	    	winLine.push(startRow)
	    	winLine.push(startCol)
	    	winLine.push(startRow -1)
	    	winLine.push(startCol +1)
	    	winLine.push(startRow -2)
	    	winLine.push(startCol +2)
	    	winLine.push(startRow -3)
	    	winLine.push(startCol +3)
	    	break;
	}
	return winLine;
}



board = new Board


