$( document ).ready(function(){

  var newBoard = function(){
    $('.cell').toggleClass('empty')
  }


  $('.cell').click(function(){
      var col = $( this ).attr('class').split(' ')[2].slice(-1);
      var colInt = parseInt(col)
      var rowInt = board.playPiece(colInt);
      var colClass = ".col-" + colInt;
      var rowClass = ".row-" + rowInt;
    if(board.colour == "blue"){
      $( '.cell' + rowClass + colClass).addClass("blue")
    } else {
      $( '.cell' + rowClass + colClass).addClass("red")
    }
    if(board.win == true){
      if(board.colour == "blue"){
        $("<div>Blue player, you are the WINNER!!!</div>").dialog();
      }else{
      $("<div>Red player, you are the WINNER!!!</div>").dialog();
      }
    }
  })
});
