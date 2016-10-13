(function() {
'use strict';

  angular
    .module('myApp')
    .controller('View2Controller', View2Controller);

  View2Controller.$inject = ['fetchedData'];
  function View2Controller(fetchedData) {
    var vm = this;
    
    vm.data = fetchedData;

    activate();

    ////////////////

    function activate() { }
  }
})();