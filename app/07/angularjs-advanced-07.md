##Topics
* Creating a custom self-standing html component
* unit testing directives
* directives advanced concepts
* lifecycle of a directive
* Itegrating with non-angular code
  * $apply
  * $watch



##Testing Directives
```javascript
describe('Validating the order-button directive', function() {
  var $compile, $rootScope;

  beforeEach(module('orders.buttons'));

  // Store references to $rootScope and $compile
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('generates a button', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<order-button color='red'></order-button>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("<button>");
  });
});

```

* http://plnkr.co/edit/wwvuP9WO0J20DZeCvEm2?p=info



##A self-standing component
* a module containing
  * a single component
  * a group of related components

* for each component
  * a Directive Declaration Object (DDO)
  * its controller
  * relevant services
    * module-level configuration, if needed



##Lifecycle
* registration in $$directives

* calling ``compile()`` of each directive
  * on the _original_ DOM
  * no access to $scope, etc.

* calling ``link()`` on each instance of the directive
  * on the _rendered_ DOM
  * bind to scope, add watchers, event handlers etc...

* recurse as needed...



##Link function
* A directive can have dependencies!

```
var uniqueInCart = function ($q, CartService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {

      //add watch to model
      //call CartService to perform validation

    }
  };
};
```



##Wrapping third party components
* E.g. a calendar component

* include the main component js file (old style)
* declare a directive
  * define parameters
* in the link function, activate the jquery plugin on the current element
  * no selectors needed!

* register the relevant listeners
  * and delegate handling to Angular code with $apply
* observe changes in Angular $scope with $watch
  * propagate the change to the component

##Example
* http://plnkr.co/edit/lWjatR2wy9xw1Hhxc5HB?p=info



##managing changes
* $apply()
  * wrap changes coming from the outside
* $watch()
  * observe internal modifications (especially of non-angular code)


Notes: template caching



##The HTML Compiler
* $apply()
  * to the entire DOM
* $digest()
  * from current scope downwards
  * prefer $digest where possibile for performance reasons

* even ad-hoc usage of the $compiler service
* https://docs.angularjs.org/guide/compiler



##Transclusion - (conditionally) display inner markup
```html
<task item="currentTask">
<h3>Additional menu</h3>
<button ng-repeat="action in taskActions track by $index">{{ task.title }}</button>
</task>
```

```javascript
angular.module('directivesModule').directive('task', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      item: '='
    },
    controller: function ($scope) {
      $scope.additionalContent = false;
      $scope.toggleAdditionalContent = function () { ... };
    },
    template: '<div> <h2 ng-click="toggleAdditionalContent()">Task: {{item.name}}</h2>' +
    '<div ng-if="additionalContent">' +
    '<ng-transclude></ng-transclude>' +
    '</div></div>'
  };
});
```

* http://plnkr.co/edit/5dnZlECZmajKfUfLbs0c?p=info



#Directives vs Web Components
* similar but not equals
* will be fully interoperable in Angular 2.0

* a directive does not have shadow DOM (now)
* Web Components include their own resource management system



##Learn more
* https://amitgharat.wordpress.com/2013/06/08/the-hitchhikers-guide-to-the-directive/

* Transclusion
  * http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives-part-2-transclusion/#



#Lab 07
Create a flavor selection directive using a jquery plugin

#Lab - advanced
* explore the source of
  * http://angular-ui.github.io/ui-calendar/



#What have we learnt?
* the meaning of transclusion :-)



#To learn even more
* Pre and Post Link function
* http://www.undefinednull.com/2014/07/07/practical-guide-to-prelink-postlink-and-controller-methods-of-angular-directives/
* Compile vs Link
* http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/
