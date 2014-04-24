
var app = angular.module('routing', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/index', {
      title:'Cookbook Index',
      templateUrl: '/app/tpl/index.html',
      controller: 'indexCtrl'
    }).when('/add',{
      title:'Add Recipe',
      templateUrl:'/app/tpl/add.html',
      controller:'addCtrl'
    }).when('/edit/:id',{
      title:'Edit Recipe',
      templateUrl:'/app/tpl/edit.html',
      controller:'editCtrl'
    }).when('/recipe/:slug', {
      title:"Recipe",
      templateUrl:'/app/tpl/recipe.html',
      controller:'recipeCtrl'
    }).when('/print',{
      title:'Print',
      templateUrl:'/app/tpl/print.html',
      controller:'printCtrl'
    });


    $routeProvider.otherwise({
      redirectTo:'/index'
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
});

