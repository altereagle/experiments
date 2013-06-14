var five = require('johnny-five'),
  board = new five.Board();

board.on("ready", function(){
  var ledThirteen = new five.Led(13);
  var ledSeven = new five.Led(7);
  var totalFlashes = 0;
  var timeBetweenFlashes = 1000;

  runFirst();

  function runFirst(){
    setTimeout(function(){
      ledThirteen.on();
      ledSeven.on();
      countFlashes();
      console.log('LED\'s have flashed ' + totalFlashes, ' times.');
      runNext();
      console.log(timeBetweenFlashes, 'milliseconds until the next flash!');
    }, timeBetweenFlashes);
  }

  function runNext(){
    turnLedThirteenOff();
    turnLedSevenOff();
  }

  function turnLedThirteenOff(){
    setTimeout(function(){
      ledThirteen.off();
    }, timeBetweenFlashes);
  }

  function turnLedSevenOff(){
    setTimeout(function(){
      ledSeven.off();

      runFirst();
    }, timeBetweenFlashes);
  }

  function countFlashes() {
    totalFlashes += 1;
  }

});

/*
* Demo 2: Functions, called by Functions, calling Functions, that call Functions!
*
*   Explanation: "What???"
*
*  How Many cycles will it take before the LEDs are on all the time?
* */