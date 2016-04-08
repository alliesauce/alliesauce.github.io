$(document).ready(function(){
  "use strict";
  console.log('jquery & script loaded');

  var main = $('main');
  var readyPlayerOne = $('#ready-player1');
  var readyPlayerTwo = $('#ready-player2');
  var turnOver = $('#turn-over');
  var turnOver2 = $('#turn-over2');
  var gameBoard = $('#game-board');
  var gameBoard2 = $('#game-board2');
  var anyTile = $('.number-tile');
  var anyTile2 = $('.number-tile2');
  var playerOneBank = $('#score1');
  var oneBankValue = 0;
  var playerTwoBank = $('#score2');
  var twoBankValue = 0;
  var timer = $('#count-timer');

  playerOneBank.html('Player One: ' + oneBankValue);
  playerTwoBank.html('Player Two: ' + twoBankValue);

  //function to reload only gameboard div after first player's turn
  /*var gameBoardReload = function () {
    //var gameBoard = $('#game-board');
    var boardContent = gameBoard.innerHTML;
    gameBoard.innerHTML = boardContent;
  };*/

  //show gameBoard, hid Ready Player message upon click after three seconds (only first time will work)
  readyPlayerOne.one('click', function() {
    //console.log('gameboard clicked!');
    setTimeout(function() {
      readyPlayerOne.hide();
      gameBoard.show();
    }, 3500);
    //adds countdown to ready player page before switching to gameboard
    var endCountdown = function () {
    }
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
        endCountdown();
      } else {
        $('#countdown1').text(count);
        count --;
      }
    }
    var count = 3;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });

  //turns mouse curser into number muncher graphic
  gameBoard.one('click', function() {
    $(this).css({'cursor': 'url(number_muchers/numbermuncher.jpeg), default'});
    //hides gameboard after 15 seconds, displays Turn Over
    setTimeout(function() {
      gameBoard.hide();
      turnOver.show();
    //NEED TO FIX THIS BACK TO 16000 when game ready. for testing purposes only, shortened
    }, 15000);
    //adds time countdown to timer at bottom of gameboard
    var endCountdown = function () {
    };
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
        endCountdown();
        $('#count-timer').text(count)
      } else {
        $('#count-timer').text(count)
        count --;
      };
    };//end of HandleTimer statement
    var count = 14;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });//end of gameBoard on click statement

  //when click on a tile, checks if divisble by 7. If divisible by 7, changes to solid color and add point to user total.  If not divisible by 7 after user click, display error message briefly and deduct 1 point from user total
      anyTile.on('click', function() {
        //console.log('you clicked a tile');
        var tileVal = $(this).html();
        //console.log(tileVal);
        var tileVal = parseInt(tileVal);
        //console.log(tileVal);
        if (tileVal % 7 == 0) {
          //console.log('matches instructions');
          //if the tile matches instructions, then display a success message briefly, then turn it blank
          oneBankValue ++;
          //console.log(oneBankValue);
          playerOneBank.html('Player One: ' + oneBankValue);
          var getTile = $(this);
          getTile.html('MUNCHED');
          setTimeout(function() {
            //getTile.css({'cursor': 'none'});
            getTile.addClass('tile-done');
          }, 1500);
        /*gameBoard.on('hover', function() {   CAN'T GET MOUSE TO TEMPORARILY HIDE
          gameBoard.css({'cursor': 'url(number_muchers/numbermuncher.jpeg), default'});
        });*/
        } else {
          //console.log('does not match instructions');
          //if the tile does not match instructions, displays wrong message briefly, then returns to original value
          oneBankValue --;
          playerOneBank.html('Player One: ' + oneBankValue);
          var getTile = $(this);
          var origTileVal = getTile.html();
          setTimeout(function() {
            getTile.addClass('wrong');
            getTile.html('Wrong! Minus one point!');
          }, 500);
          setTimeout(function() {
            getTile.removeClass('wrong');
            getTile.html(origTileVal);
          }, 1500);
        };//end of else statement
      });//end of anyTile statement
    //};//end of updateTime statement
  turnOver.on('click', function() {
    turnOver.hide();
    readyPlayerTwo.show();
  })
  readyPlayerTwo.one('click', function() {
    setTimeout(function() {
      readyPlayerTwo.hide();
      gameBoard2.show();
    }, 3500);
    var endCountdown = function () {
    }
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
        endCountdown();
      } else {
        $('#countdown2').text(count);
        count --;
      }
    }
    var count = 3;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });
  gameBoard2.one('click', function() {
    $(this).css({'cursor': 'url(number_muchers/numbermuncher.jpeg), default'});
    //hides gameboard after 15 seconds, displays Turn Over
    setTimeout(function() {
      readyPlayerTwo.hide();
      gameBoard2.hide();
      turnOver2.show();
      //turnOver.addClass('end-game');
      document.getElementById('winner-page').style.display = 'none';
    }, 15000);
    //adds time countdown to timer at bottom of gameboard
    var endCountdown = function () {
    };
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
        endCountdown();
        $('#count-timer').text(count)
      } else {
        $('#count-timer').text(count)
        count --;
      };
    };//end of HandleTimer statement
    var count = 14;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });//end of gameBoard on click statement
  anyTile2.on('click', function() {
    var tileVal = $(this).html();
    var tileVal = parseInt(tileVal);
    if (tileVal % 7 == 0) {
      twoBankValue ++;
      playerTwoBank.html('Player Two: ' + twoBankValue);
      var getTile = $(this);
      getTile.html('MUNCHED');
      setTimeout(function() {
      //getTile.css({'cursor': 'none'});
      getTile.addClass('tile-done');
    }, 1500);
    } else {
    //console.log('does not match instructions');
    //if the tile does not match instructions, displays wrong message briefly, then returns to original value
      twoBankValue --;
      playerTwoBank.html('Player Two: ' + twoBankValue);
      var getTile = $(this);
      var origTileVal = getTile.html();
      setTimeout(function() {
      getTile.addClass('wrong');
      getTile.html('Wrong! Minus one point!');
      }, 500);
      setTimeout(function() {
        getTile.removeClass('wrong');
        getTile.html(origTileVal);
      }, 1500);
    };//end of else statement
  });//end of anyTile statement*/

          //function to find winner
      var winner;
      var getWinner = function() {
        if (oneBankValue > twoBankValue) {
          winner = 'Player One is the winner!';
          //return winner;
        } else if (oneBankValue < twoBankValue) {
          winner = 'Player Two is the winner!';
          //return winner;
        } else if (oneBankValue === twoBankValue) {
          winner = 'You two are evenly matched. It\'\s a tie!'
          //return winner;
        } return winner;
      }    //end of getWinner function

  //hack to delay adding the class to the turnover page until after the first time it's shown
  /*setTimeout(function() {
    turnOver.addClass('end-game');
    document.getElementById('winner-page').style.display = 'none';
    //$('#winner-page').text(getWinner());

  }, 40000);*/

  turnOver2.on('click', function () {
    $('#winner-page').text(getWinner());
    turnOver2.hide();
    //document.getElementById('turn-over').style.display = 'none';
    //this.css('display', none);
    document.getElementById('winner-page').style.display = 'block';
  })

});





