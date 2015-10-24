angular.module('pattern', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('pattern', {
        url  : '/pattern',
        views: {
          'index': {
            templateUrl: '/modules/pattern/pattern.html'
          }
        }   ,
        data : {
          path : 'Patterns '
        }
      })
  });