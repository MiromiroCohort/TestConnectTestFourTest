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
		expect(board.board[5].length).toEqual(7)
	});
});