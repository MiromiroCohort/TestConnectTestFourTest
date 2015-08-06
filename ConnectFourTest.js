describe("ConnectFour", function(){
	var board;

	beforeEach(function() {
		board = new Board();
	});

	it("should produce a board", function() {
		expect(board).toBeTruthy();
	});

	it("board should have 7 columns and 6 rows", function() {
		expect(board.rowsColumns).toBeDefined();
	});

	it("play piece should be created", function(){
		expect(board.playPiece).toBeDefined();
	})

	it("should register something within the column", function() {
		expect(board.playPiece("blue", 1)).toEqual(board.rowsColumns[1][5] = "blue")
	});


	it("should register an Up_Right_win condition on winboard, if start position is 5,0"), function() {
		expect(board.checkWin(5, 0, "blue") == "upRight")
	}

	xit("should register an Up_win condition on winboard, if start position is 5,1")

	xit("should register an down_win condition on winboard, if start position is 1,2")

	xit("should register a down_left_win condition on winboard if start position is 3,2")

	xit("should register a down_right_win condition on winboard if start position is 0,3")



});