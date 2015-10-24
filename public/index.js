angular.module('app',
  ['ngMaterial',
   'ngMessages',
   'ui.router',
   'pattern',
   'fretboard'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/pattern');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange')
      .warnPalette('blue')
      .backgroundPalette('grey')
      .dark();
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function() {
      if ($state.current.data) {
        $rootScope.$broadcast('breadcrumb', {path: $state.current.data.path});
      }
    })
  })
  .controller('IndexCtrl', function($scope, $mdSidenav, $mdMedia, $state) {
    var vm = this;
    $scope.$on('breadcrumb', function(event, arg) {
      vm.breadcrumb = arg.path;
    });

    vm.nav = [
      {
        name : 'Patterns',
        state: 'pattern',
        menu : [
          {directives: ['ng-class', 'ng-show']},
          {localstorage: ['localJson']}
        ]
      },
      {
        name : 'Fretboard',
        state: 'fretboard',
        menu : [
          {directives: ['md-select', 'md-checkbox']}
        ]
      },
      {
        name : 'UI router',
        state: 'uirouter',
        menu : [
          {directives: []}
        ]
      }
    ];

    vm.toggleSidebar = function(side) {
      $mdSidenav(side).toggle();
    };

    vm.closeSidebar = function(side) {
      $mdSidenav(side).close();
    };

    vm.smallScreen = $mdMedia('sm');

    vm.go = function(dest) {
      vm.closeSidebar('left');
      $state.go(dest);
    }

  });