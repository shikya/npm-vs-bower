(function() {
  'use strict';

  var app = angular.module('myApp', [
    'ui.router',
    'ngAnimate'
  ]);

  app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/view1");
    //
    // Now set up the states
    $stateProvider
      .state('view1', {
        url: "/view1",
        templateUrl: "view1/view1.html",
        controller: 'View1Controller as ctrl',
        resolve:{  
         // Example showing returning of custom made promise
         greeting: ['$q', '$timeout', function($q, $timeout){
             var deferred = $q.defer();
             $timeout(function() {
                 deferred.resolve('Hello!');
             }, 0);
             return deferred.promise;
         }],
         fetchedData : ['$http', function($http){
            return $http({method: 'GET', url: 'data/view1.json'})
                      .then (function (data) {
                          return data.data;
                      });
          }]
        }
      })
      .state('view2', {
        url: "/view2",
        templateUrl: "view2/view2.html",
        controller: 'View2Controller as ctrl',
        resolve:{  
         // Example showing returning of custom made promise
         greeting: ['$q', '$timeout', function($q, $timeout){
             var deferred = $q.defer();
             $timeout(function() {
                 deferred.resolve('Hello!');
             }, 0);
             return deferred.promise;
         }],
          fetchedData : ['$http', function($http){
            return $http({method: 'GET', url: 'data/view2.json'})
                      .then (function (data) {
                          return data.data;
                      });
          }]
        }
      })

  } ]);

})();