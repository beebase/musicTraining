angular.module('pattern')
  .controller('PatternCtrl', function(PatternFactory) {
    var vm = this;
    vm.patterns = PatternFactory.list;
  });