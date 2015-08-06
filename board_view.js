$( document ).ready(function(){

  $('.cell').click(function(){
      var col = $( this ).attr('class').split(' ')[2].slice(-1);
      var colInt = parseInt(col)
      board.playPiece(colInt);
    if(Board.redTurn == false){
      $( this ).toggleClass("blue")
    } else {
      $( this ).toggleClass("red")
    }
  })
});
