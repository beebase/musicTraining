angular.module('layer', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('layer', {
        url  : '/layer',
        views: {
          index: {
            templateUrl: '/modules/layer/layer.html'
          }
        }
      })
  });