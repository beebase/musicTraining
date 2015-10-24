angular.module('fretboard')
  .controller('FretboardCtrl', function(FretboardFactory) {
    var vm = this;
    vm.fretboards = FretboardFactory.list;
    vm.notes = FretboardFactory.notes;

    //test
    var x = getAbsolutePattern('C', [1, 5, 8, 11]);

    function getAbsolutePattern(key, relativePattern) {
      console.log('getAbsolutePattern()', relativePattern)
      var result = [];
      var absoluteNoteNr = getAbsoluteNoteNr(key);
      relativePattern.forEach(function(item, index) {
        var abs = (item - 1) + absoluteNoteNr;
        if (abs >= 11) {
          abs = abs % 11;
        }

        result[index] = (abs);
      });
      console.log('getAbsolutePattern()', result);

      return result;
    }

    vm.paintFretboard = function(fretboard) {
      vm.structure = [];

      fretboard
        .strings
        .reverse()
        .forEach(function(item, index) {
          var absoluteNoteNr = getAbsoluteNoteNr(item);

          var notesArray = [];
          var start = fretboard.frets;
          var end = 0;
          for (var i = start; i >= end; i--) {
            if (x.indexOf(absoluteNoteNr) > -1) {
              notesArray[i] = vm.notes.flat[absoluteNoteNr];
            } else {
              notesArray[i] = '';
            }

            if (absoluteNoteNr === 11) { //start repeat
              absoluteNoteNr = 0;
            } else {
              absoluteNoteNr++;
            }
          }

          console.log(vm.structure);
          vm.structure[index] = notesArray;

        });

    };

    //absolute nr
    function getAbsoluteNoteNr(noteLetter) {
      var result = null;
      vm.notes.flat.forEach(function(item, index) {
        if (item === noteLetter) {
          result = index;
        }
      });
      return result;
    }

    function getNoteLetter(noteNr, signature) {
      var result = null;
      if (!signature) {
        signature = 'flat'
      }
      if (noteNr) {
        vm.notes[signature].forEach(function(item, index) {
          if (item === noteLetter) {
            result = index;
          }
        });
      }
      return result;
    }

  });