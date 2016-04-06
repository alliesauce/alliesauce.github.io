$(document).ready(function(){
  "use strict";
  console.log('jquery & script loaded');

  var main = $('main');
  var readyPlayer = $('#ready-player');
  var gameBoard = $('#game-board');


  //hide gameBoard, show Ready Player message upon click (only first time will work)
  gameBoard.one('click', function() {
     //$(gameBoard).toggleClass('ready-player');
     gameBoard.hide();
     readyPlayer.show();

  })
  //hide Ready Player message, show gameBoard upon click (only first time will work)
  readyPlayer.one('click', function() {
    readyPlayer.hide();
    gameBoard.show();
  })





});



