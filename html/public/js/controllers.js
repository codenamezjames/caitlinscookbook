var app = angular.module('indexCtrl',[]);


app.controller('indexCtrl', ['$scope','$http', function($scope, $http){
  'use strict';
  $scope.header = 'Hello World';
  var query = '{"$fields": {"page": 1, "name": 1}}';
  $scope.items=[1,3,4,6,7,8,9];
  $http.get('http://0.0.0.0:2403/book?'+query).success(function(data){
    $scope.recipes = data;
  });
}]);

app.controller('addCtrl', ['$scope','$http','$location', function($scope,$http,$location){
  'use strict';
  $scope.recipe={
    name:'',
    category:'',
    info:[[],[null, 'servings'],[],[],[]],
    image:'',
    ingredents:[[],[]],
    directions:''
  };


  $scope.submit = function(){
    $scope.$watch('value', function () {
      if ($scope.add.$valid) {
        $http.post('http://0.0.0.0:2403/book', $scope.recipe).success(function(){
          $location.path('/index');
        }).error(function(){
          $location.path('/index');
        });
      }else{
        for (var feild in $scope.add) {
             // look at each form input with a name attribute set
             // checking if it is pristine and not a '$' special field
             if (feild[0] !== '$' && $scope.add[feild].$pristine) {
                  $scope.add[feild].$setViewValue(
                      $scope.add[feild].$modelValue
                  );
             }
         }
      }
    });
  };
}]);


app.controller('editCtrl', ['$scope','$http','$location','$routeParams','$rootScope','flash','$modal', function($scope,$http,$location,$routeParams,$rootScope,flash,$modal){
  'use strict';
  $scope.newCat = false;
  $http.get('http://0.0.0.0:2403/book/'+$routeParams.id).success(function(data){
            $scope.recipe = data;
            $rootScope.title = data.name;
            console.log(data);
  });
  var query = '{"$fields": {"category": 1}}';
  $http.get('http://0.0.0.0:2403/book?'+query).success(function(data){
    var newData = [];
    for (var i = data.length - 1; i >= 0; i--) {
      angular.forEach(data[i], function(val, key){
        console.log(key)
        if (key === 'category'){
          if (this.indexOf(val.toLowerCase()) < 0 ){
            this.push(val)
          }
        }
      }, newData);
    };

    console.log(newData)
    $scope.categorys = newData;
  });

  $scope.submit = function(){
    $scope.$watch('value', function () {
      if ($scope.add.$valid) {
        $http.put('http://0.0.0.0:2403/book', $scope.recipe).success(function(){
          $location.path('/index');
          flash.add('success', 'Your recipe was updated');
        }).error(function(){
          $location.path('/index');

        });
      }else{
        for (var feild in $scope.add) {
             // look at each form input with a name attribute set
             // checking if it is pristine and not a '$' special field
             if (feild[0] !== '$' && $scope.add[feild].$pristine) {
                  $scope.add[feild].$setViewValue(
                      $scope.add[feild].$modelValue
                  );
             }

         }
      }

    });
  };
}]);



app.controller('recipeCtrl',['$scope','$http','$routeParams','$rootScope', function($scope, $http, $routeParams,$rootScope){
  'use strict';
  $http.get('http://0.0.0.0:2403/book/'+$routeParams.slug).success(function(data){
            $scope.recipe = data;
            $rootScope.title = data.name;
  });
}]);
