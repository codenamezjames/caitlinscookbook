var app = angular.module('cookbook', ['ngRoute','indexCtrl', 'routing','mm.foundation','flash']);

app.run(['$location', '$rootScope', function($location, $rootScope) {
    'use strict';
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });

}]);
app.controller('masterCtrl', ['$scope','$rootScope', function($scope){
  'use strict';
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}]);