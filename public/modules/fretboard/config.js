angular.module('fretboard', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('fretboard', {
        url  : '/fretboard',
        views: {
          index: {
            templateUrl: '/modules/fretboard/fretboard.html'
          }
        },
        data : {
          path: 'Fretboards'
        }
      })
  });