"use strict";

// require the libraries that power our bot
const five = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;

// create a "board" object
const board = new five.Board({
  io: new Raspi()
});

const makeServo = pin => ({
  pin,
  type: "continuous"
});

const sweepLoop = () => {
  // start all four servos spinning
  servos.sweep();

  // wait five seconds, then stop
  setTimeout(() => {
    servos.stop();

    // now start the cycle over again
    sweepLoop();
  }, 5000);
};

board.on("ready", () => {
  // use pins 1-4 to control four servos
  const servos = new five.Servos([
    makeServo(1), // front-left
    makeServo(2), // front-right
    makeServo(3), // rear-left
    makeServo(4) // rear-right
  ]);

  sweepLoop();
});
