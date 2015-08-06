$( document ).ready(function(){

  var newBoard = function(){
    $('.cell').toggleClass('empty')
  }



  $('.cell').click(function(){
      var col = $( this ).attr('class').split(' ')[2].slice(-1);
      var colInt = parseInt(col)
      board.playPiece(colInt);
    if(board.colour == "blue"){
      $( this ).toggleClass("blue")
    } else {
      $( this ).toggleClass("red")
    }
  })

  if(board.win == true){
    if(board.colour == 'red')
    $("<div>Red player you are the WINNER!!!</div>").dialog();
    }

});
