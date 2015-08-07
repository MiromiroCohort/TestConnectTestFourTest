$( document ).ready(function(){

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  var piecePlacementRender = function(clickedCell){
    var col = $( clickedCell ).attr('class').split(' ')[2].slice(-1);
    var colInt = parseInt(col)
    var rowInt = board.playPiece(colInt);
    var colClass = ".col-" + colInt;
    var rowClass = ".row-" + rowInt;
    if(board.colour == "blue"){
      $( '.cell' + rowClass + colClass).addClass("blue")
    } else {
      $( '.cell' + rowClass + colClass).addClass("red")
    }
  };

  var highlightWin = function(){
    winClasses = board.winResult
    console.log(board.winResult)
    for(i in winClasses){
      var rowClass = winClasses.shift();
      var colClass = winClasses.shift();
      console.log(rowClass)
      $( '.cell' + rowClass + colClass ).removeClass("blue")
      $( '.cell' + rowClass + colClass ).removeClass("red")
      $( '.cell' + rowClass + colClass ).addClass("win")
    }
  }

  var winDialogue = function(){
    if(board.win == true){
      highlightWin();
      winner = board.colour.capitalize();
      swal({
        title: "Congratulations!",
        text: winner + " has won the game!",
        type: "success",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "New Game",
        cancelButtonText: "Go play outside",
        closeOnConfirm: true,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm) {
            $(".cell").removeClass("blue")
            $(".cell").removeClass("red")
            board.newGame()
        } else {
          swal("Fine then.", "Go on. Bugger off.", "error");
        }
      });
    };
  }

  $('.cell').click(function(){
    piecePlacementRender(this);
    winDialogue();
  });
});




