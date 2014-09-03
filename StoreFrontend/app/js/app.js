'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cliente', {templateUrl: 'partials/cliente.html', controller: 'Control_cliente'});
    $routeProvider.when('/nuevocliente', {templateUrl: 'partials/nuevocliente.html', controller: 'Control_cliente'});
    $routeProvider.when('/modcliente', {templateUrl: 'partials/modcliente.html', controller: 'Control_cliente'});

    $routeProvider.when('/producto', {templateUrl: 'partials/producto.html', controller: 'Control_producto'});
    $routeProvider.when('/nuevoproducto', {templateUrl: 'partials/nuevoproducto.html', controller: 'Control_producto'});
    $routeProvider.when('/modproducto', {templateUrl: 'partials/modproducto.html', controller: 'Control_producto'});

    $routeProvider.when('/proveedor', {templateUrl: 'partials/proveedor.html', controller: 'Control_proveedor'});
    $routeProvider.when('/nuevoproveedor', {templateUrl: 'partials/nuevoproveedor.html', controller: 'Control_proveedor'});
    $routeProvider.when('/modproveedor', {templateUrl: 'partials/modproveedor.html', controller: 'Control_proveedor'});
    
    $routeProvider.when('/compra', {templateUrl: 'partials/compra.html', controller: 'Control_compra'});
    $routeProvider.when('/nuevocompra', {templateUrl: 'partials/nuevocompra.html', controller: 'Control_compra'});
    
    $routeProvider.when('/venta', {templateUrl: 'partials/venta.html', controller: 'Control_venta'});
    $routeProvider.when('/nuevoventa', {templateUrl: 'partials/nuevoventa.html', controller: 'Control_venta'});
      
    $routeProvider.when('/pago', {templateUrl: 'partials/pago.html', controller: 'Control_pago'});
    $routeProvider.when('/nuevopago', {templateUrl: 'partials/nuevopago.html', controller: 'Control_pago'});
    
    $routeProvider.otherwise({redirectTo: '/cliente'});
}])
.config(['$httpProvider', function($httpProvider) {
$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
