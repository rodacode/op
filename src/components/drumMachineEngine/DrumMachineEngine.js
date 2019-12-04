  import React from 'react';

  const DrumMachineEngine = () => {

  // SOUNDS
  const sound1 = new Howl({
    src: ['./samples/kick.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    buffer: true,
    onend: function () {
      console.log('Finished!');
    }
  });
  const sound2 = new Howl({
    src: ['./samples/clack.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    buffer: true,
    onend: function () {
    }
  });
  let sound3 = new Howl({
    src: ['./samples/hh.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    buffer: true,
    onend: function () {
    }
  });
  const sound4 = new Howl({
    src: ['./samples/perc.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    buffer: true,
    onend: function () {
    }
  });
  const sound5 = new Howl({
    src: ['./samples/hh2.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    buffer: true,
    onend: function () {
    }
  });


}

export default DrumMachineEngine;