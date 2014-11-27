##Topics
* Advanced templating and filtering
  * dates, currencies, formatting
  * expressions
  * conditional styling
  * writing custom filters
  * using filters in controllers and services



##Forms
* https://docs.angularjs.org/guide/forms

* use ng-model
  * object-based model
* behind-the-scenes controllers
  * NgModelController
  * https://docs.angularjs.org/api/ng/type/ngModel.NgModelController

* standard validation



##Standard CSS classes
```css
ng-valid: the model is valid
ng-invalid: the model is invalid
ng-valid-[key]: for each valid key added by $setValidity
ng-invalid-[key]: for each invalid key added by $setValidity
ng-pristine: the control hasn't been interacted with yet
ng-dirty: the control has been interacted with
ng-touched: the control has been blurred
ng-untouched: the control hasn't been blurred
ng-pending: any $asyncValidators are unfulfilled
```

* http://plnkr.co/edit/LrwIk4krGEwjBJ5eYtTP?p=info



##Conditional styling
* ng-class
  * https://docs.angularjs.org/api/ng/directive/ngClass



## New in 1.3
* custom update triggers
  * ``ng-model-options``
  * immediate
  * debounce

* advanced validations and messages
 * http://yom.nu/ng-forms-demo



##Advanced Templating: formatting and Dates
* Use standard filters for dates, currencies, etc.
* Expression evaluation



##Custom Filters
* A simple filter is basically a js function
  * https://docs.angularjs.org/guide/filter
  * http://plnkr.co/edit/4PW0YGP4RoUEzl6v1RMw?p=info

* stateful filters
  * avoid if possible
  * prefer parametrized filters



#Lab: write a custom filter
* creare una form per la registrazione di un numero di telefono
* campo che accetta numeri con anche - (es. 010-555666)
  * aggiungere validazioni e classi css
Write a filter which only displays numbers
* visualizzare tramite filtro il solo valore numerico



##More: You can use a filter in a controller or service
```javascript
function myController($scope, $filter)
{
  var uppercaseFilter = $filter("uppercase")
  var result = uppercaseFilter("Carlo"); // ... ,other args
}

```



#Learn more about Forms
* http://onehungrymind.com/build-mailchimp-signup-form-angularjs/
* http://toddmotto.com/everything-about-custom-filters-in-angular-js/



#What have we learnt?
* how to maximize usefulness of filters



#To learn even more
*  http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html
