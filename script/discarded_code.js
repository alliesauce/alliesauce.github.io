  tileOne.on('click', function() {
    //console.log('tile one is working');
    var oneNum = $(this).html();
    //console.log(oneNum);
    var oneNum = parseInt(oneNum);
    console.log(oneNum);
    if (oneNum % 7 == 0) {
      console.log('divisible by 7');
    } else {
      console.log('not divisible by 7');
    }
  });

  tileTwo.on('click', function() {
    //console.log('tile two is working');
    var twoNum = $(this).html();
    //console.log(twoNum);
    var twoNum = parseInt(twoNum);
    console.log(twoNum);
    if (twoNum % 7 == 0) {
      console.log('divisible by 7');
    } else {
      console.log('not divisible by 7');
    }
  });

/*var tileOne = $('#1');
  var tileTwo = $('#2');
  var tileThree = $('#3');
  var tileFour = $('#4');
  var tileFive = $('#5');
  var tileSix = $('#6');
  var tileSeven = $('#7');
  var tileEight = $('#8');
  var tileNine = $('#9');*/

css
<div class='number-tile' id='wrong'>Wrong! Minus 1 point!</div>
