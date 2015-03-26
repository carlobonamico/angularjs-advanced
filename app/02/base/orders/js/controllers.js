/**
 * 
 */
"use strict";

var orders = angular.module('orders', ['ngResource', "cart.services"]);

orders.controller("OrderCtrl", function($scope, cartService) {
    $scope.order = cartService.getCart();
    
    $scope.totalPrice = cartService.getTotalPrice()

    $scope.add = function(pizza)
    {
        //validazioni a livello di ui
        
       cartService.add(pizza);//TODO REFACTOR
    }
});
