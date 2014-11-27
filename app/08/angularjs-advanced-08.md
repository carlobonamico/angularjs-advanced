##Topics
* Advanced controllers
  * controller as syntax
  * unit testing controllers
  * integrating multiple controllers



##Review: what's a controller
 https://docs.angularjs.org/guide/controller



##Pros and Cons of the $scope

###What is hard to do?

###What is easy, and it should not be?



##"Controller as" syntax
* Use explicit View Model object

```html
<div ng-controller="ProfileController as profile">
Name: <input type="text" ng-model="profile.user.name"/>
<button ng-click="profile.resetPassword()">Reset Password</button>
```

* http://toddmotto.com/digging-into-angulars-controller-as-syntax/
* http://www.johnpapa.net/angularjss-controller-as-and-the-vm-variable/



##Pros and Cons
* Pros
  * even easier to test
  * variables are isolated

* Cons
  * more effort to use $watch and interact with $scope



##Testing a Controller
```javascript
describe('The Order Button', function() {
  beforeEach(module('orders.buttons'));

  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Quantity defaults and validations', function() {
    it('has a default quantity to add if not specified', function() {
      var $scope = {};
      var controller = $controller('OrderController', { $scope: $scope });
      $scope.addDefault();
      expect($scope.selection.quanrity).toEqual(1);
    });
  });
});
```



##Learn more
* http://blog.brunoscopelliti.com/test-angularjs-app-with-karma-jasmine-and-protractor



#Lab 08
Esercizio:

* Create a controller to display special offers when the cart contains at least N items
* write a unit test



#What have we learnt?
* two ways of creating and using controllers

## How do we coordindate multiple controllers?



#To learn even more
* http://www.johnpapa.net/spa/
