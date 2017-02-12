var mainApp = angular.module('mainApp',['ngRoute']);

mainApp.config(function($routeProvider , $locationProvider){

   $routeProvider
     .when('/home',{
       templateUrl:'views/home.html',
       controller:'homeController'
     })
     .when('/products',{
       templateUrl:'views/products.html',
       controller:'productsController'
     })
    .otherwise({
       redirectTo:'/home'
     });

     // use the HTML5 History API
     //$locationProvider.html5Mode(true);

 });


 mainApp.controller('homeController',function homeController($scope,$http) {
  
    

 });

 mainApp.controller('productsController',function productsController($scope,$http) {
  
    $scope.products =  [];    
    $scope.categories =  [];     
          
    $http.get("/api/products")
     .then(function(response) {
        
        $scope.products = JSON.parse(response.data).products;  
        $scope.categories = JSON.parse(response.data).categories;              
      
    });

 });
