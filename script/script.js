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
  var muncher = $('.muncher');
  var playerOneLives = 0;
  var playerTwoLives = 0;

  //get players names
  var playerOneName = prompt('Player One, what is your name?', 'Your name here');
  var playerTwoName = prompt('Player Two, what is your name?', 'Your name here');

  playerOneBank.html(playerOneName + ': ' + oneBankValue);
  playerTwoBank.html(playerTwoName + ': ' + twoBankValue);

  //fill the livesBox with 3 lives for each player:
  var livesBox;
  var fillLives = function() {
    livesBox = document.getElementById('lives');
    for (var i = 0; $('#lives').children().length < 5; i++)
      addLife();
  }
  var addLife = function() {
    playerOneLives ++;
    playerTwoLives ++;
    var life = document.createElement('IMG');
    life.src = 'img/numbermuncher.jpeg';
    livesBox.appendChild(life);
    /*playerTwoLives ++;
    //var life = document.createElement('IMG');
    //life.src = '../img/numbermuncher.jpeg';
    livesBox.appendChild(life);*/
  }
  fillLives();
  //show gameBoard, hid Ready Player message upon click after three seconds (only first time will work)
  readyPlayerOne.one('click', function() {
    //console.log('gameboard clicked!');
    console.log(playerOneName);
    setTimeout(function() {
      readyPlayerOne.hide();
      gameBoard.show();
    }, 3500);
    //adds countdown to ready player page before switching to gameboard
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
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
    $(this).css({'cursor': 'url(img/numbermuncher.jpeg), default'});
    //hides gameboard after 15 seconds, displays Turn Over
    setTimeout(function() {
      gameBoard.hide();
      turnOver.show();
    }, 16000);
    //adds time countdown to timer at bottom of gameboard
    var handleTimer = function () {
      /*if (playerOneLives === 0) {
        count = 0;
      }*/ if (count === 0) {
        clearInterval(timer);
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

  //when click on a tile, checks if divisble by 7. If divisible by 7, changes to solid color and add 5 points to user total.  If not divisible by 7 after user click, display error message briefly and deduct 1 point from user total
      anyTile.on('click', function() {
        //console.log('you clicked a tile');
        var tileVal = $(this).html();
        //console.log(tileVal);
        var tileVal = parseInt(tileVal);
        //console.log(tileVal);
        if (tileVal % 7 == 0) {
          //console.log('matches instructions');
          //if the tile matches instructions, then display a success message briefly, then turn it blank
          oneBankValue += 5;
          //console.log(oneBankValue);
          playerOneBank.html(playerOneName + ': ' + oneBankValue);
          //makes munch sound when you click a tile:
          var bite = new Audio('http://www.midistern.de/spuk1.wav');
          bite.play();
          var getTile = $(this);
          getTile.html('MUNCHED');
          setTimeout(function() {
            //getTile.css({'cursor': 'none'});
            getTile.addClass('tile-done');
          }, 1500);
        /*gameBoard.on('hover', function() {   CAN'T GET MOUSE TO TEMPORARILY HIDE
          gameBoard.css({'cursor': 'url(img/numbermuncher.jpeg), default'});
        });*/
        } else {
          //if the tile does not match instructions, displays wrong message briefly, then returns to original value
          //remove one life
            //create removeLife function for incorrect guess
          var removeLife = function() {
            if (playerOneLives > 0) {
              playerOneLives--;
              livesBox.removeChild(livesBox.lastChild);
            }
          }
          removeLife();

          //playerOneBank.html(playerOneName + ': ' + oneBankValue);
          //plays short buzzer if incorrect munch
          var badBite = new Audio('http://cd.textfiles.com/sbsw/BEEPCHMS/DITDAT.WAV');
          badBite.play();
          var getTile = $(this);
          var origTileVal = getTile.html();
          setTimeout(function() {
            getTile.addClass('wrong');
            getTile.html('Wrong! You lost a life!');
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
      if ($('#lives').children().length < 4) {
        fillLives();
      }
    }, 3500);
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
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
    $(this).css({'cursor': 'url(img/numbermuncher.jpeg), default'});
    //hides gameboard after 15 seconds, displays Turn Over
    setTimeout(function() {
      readyPlayerTwo.hide();
      gameBoard2.hide();
      turnOver2.show();
      //turnOver.addClass('end-game');
      document.getElementById('winner-page').style.display = 'none';
    }, 16000);
    //adds time countdown to timer at bottom of gameboard
    var handleTimer = function () {
      if(count === 0) {
        clearInterval(timer);
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
      twoBankValue += 5;
      playerTwoBank.html(playerTwoName+ ': ' + twoBankValue);
      var bite = new Audio('http://www.midistern.de/spuk1.wav');
      bite.play();
      var getTile = $(this);
      getTile.html('MUNCHED');
      setTimeout(function() {
      //getTile.css({'cursor': 'none'});
      getTile.addClass('tile-done');
    }, 1500);
    } else {
    //console.log('does not match instructions');
    //if the tile does not match instructions, displays wrong message briefly, then returns to original value
      var removeLife = function() {
        if (playerTwoLives > 0) {
          playerTwoLives--;
          livesBox.removeChild(livesBox.lastChild);
        }
      }
      removeLife();
      var badBite = new Audio('http://cd.textfiles.com/sbsw/BEEPCHMS/DITDAT.WAV');
      badBite.play();
      var getTile = $(this);
      var origTileVal = getTile.html();
      setTimeout(function() {
      getTile.addClass('wrong');
      getTile.html('Wrong! You lost a life');
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
          winner = playerOneName + ' wins!';
          //return winner;
        } else if (oneBankValue < twoBankValue) {
          winner = playerTwoName + ' wins!';
          //return winner;
        } else if (oneBankValue === twoBankValue) {
          winner = playerOneName + ' and ' + playerTwoName + ' are evenly matched. It\'\s a tie!'
          //return winner;
        } return winner;
      }    //end of getWinner function
  turnOver2.on('click', function () {
    $('#winner-page').text(getWinner());
    turnOver2.hide();
    document.getElementById('winner-page').style.display = 'block';
  })
});
