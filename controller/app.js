var mainApp = angular.module('mainApp',['ngRoute']);

mainApp.config(function($routeProvider , $locationProvider){

   $routeProvider
     .when('/home',{
       templateUrl:'views/home.html',
       controller:'homeController'
     })
    .otherwise({
       redirectTo:'/home'
     });

     // use the HTML5 History API
     //$locationProvider.html5Mode(true);

 });

// Controllers
 mainApp.controller('homeController',function homeController($scope,$http) {



 });
