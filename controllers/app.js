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
    $scope.modalProduct =  []; 
    $scope.productSource = "local";
    $scope.externalPath = "";


    $scope.getLoalProducts =  function(){
      

      $http.get("/api/products")
        .then(function(response) {
        
          $scope.products = JSON.parse(response.data).products;  
          $scope.categories = JSON.parse(response.data).categories;              
      
        });

    }

    $scope.searchProducts =  function(){
      
      if($scope.productSource == "local")
      {

        $scope.getLoalProducts();

      }


    }

    $scope.init =  function(){

      $scope.searchProducts();
    }

    $scope.productDetail = function(product){
      
      $scope.modalProduct = product;
      $scope.modalProduct.units = 1;
      $scope.modalProduct.TotalPrice = parseFloat($scope.modalProduct.units) * parseFloat($scope.modalProduct.price);
      $scope.UpdatePrice();
    } 

    $scope.UpdatePrice = function(){
      $scope.modalProduct.TotalPrice = parseFloat($scope.modalProduct.units) * parseFloat($scope.modalProduct.price);
    }

    $scope.UpUnit = function(){
      if($scope.modalProduct.units + 1 <= 20){
        $scope.modalProduct.units++;
        $scope.UpdatePrice();
      }
    }

    $scope.DownUnit = function(){
      if($scope.modalProduct.units - 1 >= 1){
       $scope.modalProduct.units--;
       $scope.UpdatePrice();
      }      
    }

    $scope.init();

 });
