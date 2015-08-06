$( document ).ready(function(){

  var newBoard = function(){
    $('.cell').toggleClass('empty')
  }



  $('.cell').click(function(){
      var col = $( this ).attr('class').split(' ')[2].slice(-1);
      var colInt = parseInt(col)
      board.playPiece(colInt);
    if(Board.colour == "blue"){
      $( this ).toggleClass("blue")
    } else {
      $( this ).toggleClass("red")
    }
  })

  if(Board.win == true){
    alert(Board.colour + " wins!")
  }

  if(Board.win == true){

    winnerString = board.colour + " wins!"

    function loaded () {
      document.getElementById("win-message").innerHTML = winnerString;
    }

    $(function() {
    $( "#win-message" ).dialog({
      modal: true,
      buttons: {
        New Game: function() {
          Board.newGame();
          newBoard();
          $( this ).dialog( "close" );
        }
      }
    });
  });
  }

});
