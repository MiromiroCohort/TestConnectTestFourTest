describe("ConnectFour", function(){
	var board;

	beforeEach(function() {
		board = new Board();
	});

	it("should produce a board", function() {
		expect(board).toBeTruthy();
	});

	it("board should have 7 columns and 6 rows", function() {
		board.rows[5][6] = " "
		expect(board.rows[5][6]).toBeDefined();
	});

	it("play piece should be created", function(){
		expect(board.playPiece).toBeDefined();
	});

	it("should register something within the column", function() {
		board.playPiece(1)
		expect(board.rows[5][1]).toBeDefined();
	});


	it("Registers a down win condition on winboard, if start position is 2,0"), function() {
		
		expect(board.checkWin(2, 0, "red") == [2,0, "down"])
	});

	xit("should register an down_win condition on winboard, if start position is 1,2")

	xit("should register a down_left_win condition on winboard if start position is 3,2")

	xit("should register a down_right_win condition on winboard if start position is 0,3")



});


