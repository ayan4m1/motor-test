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
  // servos[0] = front-left
  // servos[1] = front-right
  // servos[2] = rear-left
  // servos[3] = rear-right
  const servos = new five.Servos([
    makeServo("P1-32"), // front-left
    makeServo("P1-33"), // front-right
    makeServo("P1-12"), // rear-left
    makeServo("P1-35") // rear-right
  ]);

  // start an infinite loop of on-off cycles
  sweepLoop();
});
