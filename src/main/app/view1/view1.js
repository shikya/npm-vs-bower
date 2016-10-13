(function() {
'use strict';

  angular
    .module('myApp')
    .controller('View1Controller', View1Controller);

  View1Controller.$inject = ['fetchedData'];
  function View1Controller(fetchedData) {
    var vm = this;
    vm.data = fetchedData;

    activate();

    ////////////////

    function activate() { }
  }
})();