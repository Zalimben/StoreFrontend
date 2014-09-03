'use strict';

/* Services */

var storeServices = angular.module('myApp.services', ['ngResource']);
 
storeServices.factory('Customers', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/customers/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(customer){
            return resource.save(customer);
        },
        update : function(customer){
            return resource.put({ id: customer.customerId }, customer);
        },
        get : function(id){
            return resource.get({ id: id });
        }
    };
});

storeServices.factory('Sales', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/salesorder/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(sales){
            return resource.save(sales);
        }
    };
});

storeServices.factory('Details', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/salesdetails/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(detail){
            return resource.save(detail);
        }
    };
});

storeServices.factory('Manufacturers', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/manufacturers/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(manufacturer){
            return resource.save(manufacturer);
        },
        update : function(manufacturer){
            return resource.put({ id: manufacturer.manufacturerId }, manufacturer);
        }
    };
});


storeServices.factory('Paids', function($resource){
   var resource = $resource('http://localhost:8080/StoreBackend/webresources/paids/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(paid){
            return resource.save(paid);
        }
    };
});

storeServices.factory('Purchase', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/purchaseorder/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(purchase){
            return resource.save(purchase);
        }
    };
    
});


storeServices.factory('Products', function($resource){
    var resource = $resource('http://localhost:8080/StoreBackend/webresources/products/:id', { id: '@_id' },
    {'put':{method:'PUT'}});
    
    return{
        getAll:function(){
            return resource.query();
        },
        add:function(product){
            return resource.save(product);
        },
        update : function(product){
            return resource.put({ id: product.productId }, product);
        }
    };
});
