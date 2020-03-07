# motor-test

A simple test of Johnny-Five's ability to control servo motors.

## prerequisites

- Raspberry Pi running Raspbian
- Git
- NodeJS
- Four servo motors
- Breadboard
- DC power supply (min. 1A)
- Hookup wire

## usage

- Connect servo motors to power using the breadboard and hookup wire
- Connect servo motor pulse wires like this

```
  a[  ]b    a) GPIO12
   [  ]     b) GPIO13
  c[  ]d    c) GPIO18
            d) GPIO19
```

- Open a terminal
- Run the following commands

```
git clone git@github.com:ayan4m1/motor-test.git
cd motor-test
npm install
npm start
```

## additional reading

- [Johnny-Five docs](http://johnny-five.io/api/)
- [Johnny-Five examples](http://johnny-five.io/examples/)
- [raspi-io pin mapping](https://github.com/nebrius/raspi-io/wiki/Pin-Information#model-abraspberry-pi-2raspberry-pi-3raspberry-pi-zero)
- [Raspberry Pi GPIO pinout](https://pi4j.com/1.2/images/j8header-3b-plus.png)
