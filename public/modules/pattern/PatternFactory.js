angular.module('pattern')
  .factory('PatternFactory', function() {
    var patterns = [
      {name: 'Major', category: 'chord', type: 'triad', structure: [1, 5, 8]},
      {name: 'Minor', category: 'chord', type: 'triad', structure: [1, 4, 8]}
    ];
    return {
      list: patterns
    }
  })

