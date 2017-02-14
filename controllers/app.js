var mainApp = angular.module('mainApp',['ngRoute','angularUtils.directives.dirPagination']);


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

 mainApp.factory("productToBuy",function(){

    function productToBuy(nId,nName,nImg,nPrice,nUnits) {
      this.Id = nId;
      this.name = nName;
      this.img = nImg;
      this.price = nPrice;
      this.units = nUnits;
    }

    return productToBuy;

 });

 mainApp.controller('homeController',function homeController($scope,$http) {



 });

 mainApp.controller('productsController',function productsController($scope,$http,productToBuy) {

    $scope.products =  [];
    $scope.categories =  [];
    $scope.modalProduct =  [];
    $scope.productSource = "local";
    $scope.externalPath = "";
    $scope.filterName = "";
    $scope.filterBest = "all";
    $scope.filterPriceRange = "all";
    $scope.filterOrderBy = 'name';

    $scope.carShopping = [];

    /*Filters*/

    $scope.filterAll=function(value) {

      var res = false;

      res = $scope.filterCheckBestSeller(value) && $scope.filterCheckPriceRange(value);

      return res;

    }

    $scope.filterCheckBestSeller=function(value) {

      if($scope.filterBest == "all")
      {
        return true;
      }

      if ((value.best_seller===true) && $scope.filterBest == "best") {
        return true;
      } else {
        return false;
      }


    }

    $scope.filterCheckPriceRange=function(value) {

      if($scope.filterPriceRange == "all")
      {
        return true;
      }

      if (  parseFloat(value.price) >= 30 && $scope.filterPriceRange == "30") {
        return true;
      }

      if (  parseFloat(value.price) <= 10 && $scope.filterPriceRange == "10") {
        return true;
      }
      else
      {
        return false;
      }

    }

    /*Filters*/

    /*Functions*/

    $scope.addCarProduct = function(){

      var k = 0;
      var isInList = false;
      var noUnits = false;
      var posArray = -1;


      for(k = 0;k<$scope.carShopping.length;k++)
      {
        if(parseInt($scope.carShopping[k].Id) == parseInt($scope.modalProduct.id))
        {
          posArray = k;
          isInList = true;
          noUnits = parseInt($scope.modalProduct.units);
          k = $scope.carShopping.length + 1;
        }

      }

      if(isInList)
      {

        $scope.carShopping[posArray].units = parseInt($scope.carShopping[posArray].units) + noUnits;

      }
      else {

        $scope.carShopping.push(new productToBuy($scope.modalProduct.id,$scope.modalProduct.name,$scope.modalProduct.img + $scope.modalProduct.id ,$scope.modalProduct.price,parseInt($scope.modalProduct.units)));

      }

      $scope.modalProduct = [];

      $("#close-modal1").click();

    }

    $scope.showMessage = function(){
            var $msg = document.getElementById("msg");
            if($msg.classList.contains("hidden"))
            {
              $msg.classList.remove("hidden");
              $msg.classList.add("shown");
            }
    }

    $scope.HideMessage = function(){
            var $msg = document.getElementById("msg");
            if($msg.classList.contains("shown"))
            {
              $msg.classList.remove("shown");
              $msg.classList.add("hidden");
            }
    }

    $scope.getLoalProducts =  function(){

        $scope.products =  [];

        $http.get("/api/products").then(function mySucces(response) {

            $scope.products = JSON.parse(response.data).products;
            $scope.categories = JSON.parse(response.data).categories;

            $scope.HideMessage();


        }, function myError(response) {


            $scope.showMessage();
            //d.classList.add("otherclass");


        });


    }

    $scope.getExternProducts =  function(path){

        $scope.products =  [];

        $http.get(path).then(function mySucces(response) {

            $scope.products = JSON.parse(response.data).products;
            $scope.categories = JSON.parse(response.data).categories;

            $scope.HideMessage();

        }, function myError(response) {

              $scope.showMessage();

        });


    }

    $scope.searchProducts =  function(path){

      if($scope.productSource == "local")
      {

        $scope.getLoalProducts();

      }


      if($scope.productSource == "extern")
      {

        $scope.getExternProducts(path);

      }


    }

    $scope.init =  function(){

      $scope.searchProducts("");
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

    /*Functions*/


    /*Factory*/



    /*Factory*/


    $scope.init();

 });
