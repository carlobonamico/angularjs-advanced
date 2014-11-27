##Topics
* Advanced navigation
  * ng-route vs ui-router
  * state management



##What is routing?
* mapping URLs to views and controllers
* keeping track of location and history
  * dividing client-side vs server-side navigation
  * handling single-page subview loading
* and more...
  * basically, state management in the application



##Advanced routing with ng-route
* https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
* use of resolution
  * http://plnkr.co/edit/YmilG607Rpc7hMtChrU0?p=preview



##Limits of ng-route
* declares urls
  * can get complex and not modular as the application grows
* limits in managing transitions



##Which router?
* Historically, Angular included a simple but robust router
* Split as a module in 1.2
* Can now choose between standard and
  * ui-router
  * ionic router for mobile
* The new Angular 2.0 router will also be compatible with 1.x



##ui-router
* Open Source component with
  * Nested views
  * named views
  * decorators
  * based on states, not urls

* https://github.com/angular-ui/ui-router/tree/master/sample
* http://www.ng-newsletter.com/posts/angular-ui-router.html
* http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router



##An example
```javascript
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'partials/home.html'
  })
});
```

* state based



##Composing multiple states
* https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views



##Advanced behaviour with resolve
* resolves dependencies to be injected into the target controller

```javascript
$stateProvider.state('account', {
  resolve: {
    // This will return immediately
    person: function() {
      return {
        name: "Carlo",
        email: "carlo.bonamico@gmail.com"
      }
    },
    // This function returns a promise, will be resolved before navigation
    details: function($http) {
      return $http({
        method: 'GET',
        url: '/account/profile'
      });
    }, //could be chained to other promises

    controller: function($scope, details) {
      $scope.details = details;
    }
  })

```



##Learn more
* Global resolution
  * http://www.jvandemo.com/how-to-resolve-application-wide-resources-centrally-in-angularjs-with-ui-router/



#Lab 10
Esercizio:

* A) riscrivere il routing dell' applicativo con ui-router
* B) gestire due livelli di stato: pagina e visualizzazione degli ingredienti di una pizza



#What have we learnt?
* differences between ng-route and ui-router



#To learn even more
* Navigation and URL
  * https://docs.angularjs.org/guide/$location
