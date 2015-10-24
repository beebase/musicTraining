angular.module('fretboard')
  .factory('FretboardFactory', function() {
    //absolute values A=0, C=3....
    var notes = {
      sharp: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
      flat : ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    };

    var fretboards = [
      {name: 'guitar 6 string', strings: ['E', 'A', 'D', 'G', 'B', 'E'], orientation: 'left', frets: 24},
      {name: 'bass 5 string', strings: ['E', 'A', 'D', 'G', 'C'], orientation: 'left', frets: 24}

    ];

    return {
      list          : fretboards,
      notes         : notes,
      paintFretboard: function(pattern) {

      }
    }
  })
;