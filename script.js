$(document).ready(function(){
  "use strict";
  console.log('jquery & script loaded');

  var main = $('main');
  var readyPlayer = $('#ready-player');
  var gameBoard = $('#game-board');
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

  playerOneBank.html(oneBankValue);
  playerTwoBank.html(twoBankValue);

  /*STARTING POINT FOR THURSDAY - player banks from being two separate p tags into one, and just updating the text all together*/




  //show gameBoard, hid Ready Player message upon click after three seconds (only first time will work)
  readyPlayer.one('click', function() {
    //console.log('gameboard clicked!');
    setTimeout(function() {
      readyPlayer.hide();
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
        $('#countdown').text(count);
        count --;
      }
    }
    var count = 3;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  });

  //turns mouse curser into number muncher graphic
  gameBoard.on('click', function() {
    $(this).css({'cursor': 'url(number_muchers/numbermuncher.jpeg), default'});
  });

  //when click on a tile, checks if divisble by 7. If divisible by 7, changes to solid color. If not divisible by 7 after user click, display error message briefly
  //FUTURE funcitonality: if divisible by 7, add point to user total. if not divisible by 7 (and user clicked), deduct 1 point from user total
  anyTile.on('click', function() {
    //console.log('you clicked a tile');
    var tileVal = $(this).html();
    //console.log(tileVal);
    var tileVal = parseInt(tileVal);
    //console.log(tileVal);
    if (tileVal % 7 == 0) {
      //console.log('matches instructions');
      //if the tile matches instructions, then display a success message briefly, then turn it blank
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
    };
  })

});





