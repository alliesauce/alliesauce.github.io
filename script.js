$(document).ready(function(){
  "use strict";
  console.log('jquery & script loaded');

  var main = $('main');
  var readyPlayerOne = $('#ready-player1');
  var readyPlayerTwo = $('#ready-player2');
  var turnOver = $('#turn-over');
  var gameBoard = $('#game-board');
  //var gameBoard2 =gameBoard;
  /*var tileOne = $('#1');
  var tileTwo = $('#2');
  var tileThree = $('#3');
  var tileFour = $('#4');
  var tileFive = $('#5');
  var tileSix = $('#6');
  var tileSeven = $('#7');
  var tileEight = $('#8');
  var tileNine = $('#9');*/
  var anyTile = $('.number-tile');
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
    }, 4000);
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
    }, 16000);
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
    var count = 15;
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
      gameBoard.load ('index.html #game-board');
      //gameBoardReload();
    }, 4000);
    gameBoard.show();
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


  /*gameBoard2.one('click', function() {
    $(this).css({'cursor': 'url(number_muchers/numbermuncher.jpeg), default'});
    //hides gameboard after 15 seconds, displays Turn Over
    setTimeout(function() {
      gameBoard2.hide();
      turnOver.show();
    }, 16000);
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
    var count = 15;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });//end of gameBoard on click statement
      anyTile.on('click', function() {
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
});





