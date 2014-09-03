'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('Control_cliente', function($scope, Customers) {
        $scope.customer = {};
        $scope.custom = {};
        $scope.allcustomers = Customers.getAll();
        $scope.add = function(customer){
            $scope.allcustomers.push(Customers.add(customer));
        };
        $scope.update = function(custom){
            Customers.update(custom);
        };
       })
   
  .controller('Control_producto', function($scope, Products, Manufacturers) {
        $scope.product = {};
        $scope.producto = {};
        
        $scope.allproducts = Products.getAll();
        
        $scope.allmanufacturers = Manufacturers.getAll();
        
        $scope.add = function(product){
            $scope.allproducts.push(Products.add(product));
        };
        $scope.update = function(producto){
            Products.update(producto);
        };
  })
  .controller('Control_proveedor', function($scope, Manufacturers) {
      $scope.allmanufacturers = Manufacturers.getAll();
      
      $scope.manufacturer = {};
      $scope.proveedor = {};
      
      $scope.add = function(manufacturer){
            $scope.allmanufacturers.push(Manufacturers.add(manufacturer));
        };
        $scope.update = function(proveedor){
            Manufacturers.update(proveedor);
        };
      
  })
  .controller('Control_venta',function($scope, Sales, Customers, Products) {
      $scope.sales = {};
      $scope.cart =[];

      
      $scope.allcustomers = Customers.getAll();
      $scope.allproducts = Products.getAll();
      
        
      $scope.allsales = Sales.getAll();
        
      $scope.add = function(sales){
            $scope.allsales.push(Sales.add(sales));
      };
      $scope.add = function(detail){
            $scope.cart.push(detail);
            $scope.detail = '';
      };
      
      
  })  
  .controller('Control_compra',function($scope, Purchase, Products) {
      $scope.purchase = {};
      
      $scope.allpurchase = Purchase.getAll();
      
      $scope.allproducts = Products.getAll();
      
      $scope.add = function(purchase){
            $scope.allpurchase.push(Purchase.add(purchase));
        };
      
      })
   .controller('Control_pago', ['$scope', 'Paids', 'Customers', 'Products' 
      ,function($scope, Paids, Customers) {
      $scope.allcustomers = Customers.getAll();
      
      $scope.allpaids = Paids.getAll();
      
      $scope.paid = {};
      $scope.add = function(paid){
            $scope.allpaids.push(Paids.add(paid));
      };
  }]);  