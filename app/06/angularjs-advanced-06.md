##Topics
* How to write a directive
  * basic example with static html output
  * dynamic html output with a template
  * embedding controllers in directive
  * attribute binding
  * isolated scopes



##Reusing page elements
* why not just ng-include?
```html
  <ng-include src= "'pizza-menu.html'" ></ng-include>
```



##What is a directive?
* a generic way of customizing a view
  * including creating reusable elements
  * HTML5, but also SVG

* the name comes from "compiler directives"



##Built-in directives
* have a look
  * ng-hide / ng-show
  * https://github.com/angular/angular.js/tree/master/src/ng/directive



##Advantages
* separate concerns
* separate DOM from logic
* performance
* reuse



##Roles of directives
* "Elements"  
* "Decorators" (e.g. ng-class)
* "Templates" (e.g. ng-repeat)

###Angular 2.0 will distinguish among them natively



#The Simplest Directive
```javascript
angular.module('pizza.buttons').directive('orderButton', function () {
  return {
    template: '<button>Order {{pizza.name}} </button>'
  };
});

```

```html
  <order-button></order-button>
```

* http://plnkr.co/edit/VOoQasDUUDWU4kPp2AIV


##What is happening here?
* camel-case-naming
* where does "pizza" come from?
  * scope is not isolated



##Customizing a directive
```javascript
angular.module('pizza.buttons')
.directive('orderButton', function () {
  return {
    restrict: 'E', //E = element, A = attribute, C = class, M = comment
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      color: '@'         },
      template: '<button>Order {{pizza.name}} </button>',
      //OR templateUrl: 'mytemplate.html',
      controller: controllerFunction, //Embed a custom controller in the directive
      link: function ($scope, element, attrs) { } //DOM manipulation
    }
    });
```

* http://docs.angularjs.org/api/ng/service/$compile



## DOM manipulation
```javascript
app.directive('orderButton', function () {
  return {
    ... //same as before
    link: function ($scope, element, attrs) {
      element.css('color',attrs.color);

      element.bind('mouseenter', function () {
        element.css('background-color', 'yellow');
      });
      element.bind('mouseleave', function () {
        element.css('background-color', attrs.color);
      });
    }
  };
});
```



##Restriction
* E -> element (typically reusable components)
* A -> attribute (typically decorators)

Limit as much as possible

* C -> class
* M -> comment



##Isolating scope
```html
  <order-button color="'yellow'" pizza="menu[0]" action="count = count + 1"></orderButton>
```

```javascript
angular.module('pizza.buttons').directive('orderButton', function () {
  return {
    scope: {
      color: '@',
      pizza: '='
      action: '&'
    },
    template: '<button ng-click="action()">{{pizza.name}}</button>'
  };
});

```



## Types of attributes
* = bind as model
* @ read attribute value only
* & function reference

* https://docs.angularjs.org/guide/directive

* https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope



##Adding a controller
```javascript
angular.module('pizza.buttons').directive('orderButton', function () {
  return {
    scope: {
      color: '@',
      pizza: '='
      action: '&'
    },
    template: '<button ng-click="order()">{{pizza.name}}</button>',

    controller: function ($scope) {

      $scope.order = function () {
        //Add new customer to directive scope
        $scope.cart.items.push({
          name: pizza.name,
          quantity: 1
        });

        $scope.action();
      };
    },
  };
});
```



##Passing parameters
```javascript
$scope.add({ name: name });
$scope.add()(name);

```

* parameters for 'A' directives
  * directive-name-attribute-name



##Examples
* https://github.com/DanWahlin/CustomerManagerStandard



#Learn more
* http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals




#Lab 06
Esercizio:

* creare una direttiva "icecream-flavor"
  * parametri:
    * flavor (e.g. "chocolate", "strawberry")
    * maxQuantity : integer
    * selection: { flavor, quantity }

* usarla dentro un ng-repeat per creare una lista di gelati



#What have we learnt?
* a directive can encapsulate HTML5, state and behavior in a reusable component
* directives can be composed



#To learn even more
* https://docs.angularjs.org/guide/css-styling
* http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-3-isolate-scope-and-function-parameters
