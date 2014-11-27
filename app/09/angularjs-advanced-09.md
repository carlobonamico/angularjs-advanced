##Topics
* Event handling
* event bus
* listening to events
* using events for coordinating decoupled services and page sections



##A rich UI: multiple blocks
* Think Project Navigator, Search Results and Editor in an IDE
  * or Pizza selection, Beverage Selection, Cart and Offers

* when you select a Search result, it is selected both in the Project Navigator and the Editor
  * but you do not know which windows are open in advance
  * new IDE plugins could be added afterwards...

###How do you keep them decoupled, but still coordinate their interaction? in an Angular webapp?



##Option 1: rootScope variables
```javascript
angular.module("ide").controller("SearchResultsController",
  function($rootScope){
    //do search
    $rootScope.selectedFile = "test.js";
    $rootScope.selectedLine = 80;
  });
```

* Why is this bad? :-(
  * what happens when you have many modules?
  * when you need to change params & behavior?



##Option 2: shared Service
  ```javascript
  angular.module("ide").controller("SearchResultsController",
  function(SelectionService){
    //do search
    SelectionService.select({
      file : "test.js",
      line : 80
    });
  });
  //esplicit listener registration in service or $watch in other controllers
  ```

* The standard way - Better, but...
  * what happens when you have many modules?
  * when you need to change params & behavior?



##Option 3: events!
```javascript
angular.module("ide").controller("SearchResultsController",
function($rootScope){
  //do search
  var selectionEvent = {
    file : "test.js",
    line : 80
  };

  $rootScope.$emit('lineSelected', selectionEvent);
});

angular.module("ide").controller("NavigatorController",
function($scope, $rootScope){
  $rootScope.$on('lineSelected', function(event, selectionEvent) {
    $scope.selectedFile = selectionEvent.file;
      });
  });
```

* Decouple 'what happened?' from 'what do I do then?'



##Let's try
* http://plnkr.co/edit/93AUipVSfImiyg7bc1vZ?p=preview

* Reference:
  * https://docs.angularjs.org/api/ng/type/$rootScope.Scope


##Broadcast vs Emit
* Docs:
```
Scopes can propagate events in similar fashion to DOM events.

The event can be broadcasted to the scope children or emitted to scope parents.
```

* https://docs.angularjs.org/guide/scope



#Learn more
* http://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/



#Lab 09
Esercizio:

* il modulo carrello degli ordini segnala l'aggiunta di un elemento

* un modulo special_offerts propone una offerta se il prodotto costa piu' di X
* il modulo History aggiunge l'operazione a un log delle operazioni effettuate
* provare ad abilitare / disabilitare questi moduli on demand



#What have we learnt?
* using events to decouple major app sections



#To learn even more
* http://www.objectpartners.com/2013/08/21/using-services-and-messages-to-share-data-between-controllers-in-angularjs/
