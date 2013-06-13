var five = require('johnny-five'),
  board = new five.Board();

function runWhenReady(){
  var output = {
    LED: [(new five.Led(13))]
  };

  output.LED[0].strobe();
}

board.on("ready", runWhenReady);

/*
  HELP: Demo1

  1: How to Run:
    This is a node script(JavaScript) that is run from the console by typing
    (without quotes) "node demo1.js" from inside of the directory containing the file
    from the console.

    NOTE: This only works if you have installed Firmata through the Arduino IDE, follow
    the steps found at this site first before running.
    https://github.com/altereagle/johnny-five

  2: What is going on:
    First the johnny-five library is loaded, which contains all the methods and information you
    will need to interact with your board. Your "board" is loaded and stored as a variable in your
    program, along with the johnny-five library "five".

    Then a function is made called "runWhenReady"(without quotes) that is passed to your board
    when it indicates that is ready to receive input from you, the programmer.

    The "runWhenReady" function tells the led wired to pin 13 to "strobe" by modulating it's
    voltage.

   3: Exercise/Challenges:
    - Try hooking up another LED and making it strobe.
    - Draw a diagram of this circuit using real symbols.
      http://en.wikipedia.org/wiki/Circuit_diagram

  4: Critical Thinking:
    - Where are there other LED's that strobe?

 */