/**
 *
 */
angular.module("pizza5App",[]);

var pizza5App = angular.module('pizza5App', ['menu','orders', 'ngRoute']);



pizza5App.directive('promo', function(){
    return {
        restrict: 'E',
        scope:{
            name: '@'
        },
        templateUrl: 'directives/promo.html'
    }
})

pizza5App.config(
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/menu.html',
            controller: 'PizzaMenuCtrl'
        });
        $routeProvider.when('/signup', {
            templateUrl: 'partials/signup.html'

        });
        $routeProvider.when('/pizza/:id', {
            templateUrl: 'partials/ingredients.html',
            controller: 'IngredientsCtrl'
        });
        $routeProvider.otherwise('/');
        //{ redirectTo: '#/' }
        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    });



    /**
     *
     */

    var menu = angular.module('menu', ['menu.services','ngRoute']);

    menu.controller('PizzaMenuCtrl', function ($scope, $resource, MenuService) {

        $scope.menu = MenuService.query(function() { //e non get
            console.log("Menu loaded");
        });

    });


    menu.controller('IngredientsCtrl', function ($scope, $routeParams, MenuService) {

        console.log("Requesting ingredients for "+$routeParams);
        $scope.ingredients = MenuService.getIngredients($routeParams.id);

    });
    var menuServices = angular.module('menu.services', ['ngResource']);

    menuServices.service("MenuService", function PizzaMenuService($resource) {

        var MenuResource = $resource('menu.json'); //, {userId:'@id'}

        this.menu = [];

        this.getIngredients = function (id) {
            return this.menu[id].ingredients;
        };

        this.query = function () {
            this.menu = MenuResource.query(function () { //e non get
                //user.$save();
                console.log("Menu loaded");
            });
            return this.menu;
        }

        this.query();


    })
    ;
