##Topics
* Accessing server side content
* advanced usage of $resource
* custom http methods
* authentication and headers



##Http vs websockets vs REST
* alternatives in backend access



##RESTful backends
* Default approach: ng-resource
  * parametrized urls
  * pre- and post- processing

* the returned objects are enriched
  * keep reference to the originating service
  * used by promises to fill-in the result asynchronously



##Defining a resource client
* url (with parameters)
  * default parameters (@ for compute)
```javascript
  $resource ("http://jsonplaceholder.typicode.com/todos/:id")

```

* http://plnkr.co/edit/9Abfd2d8JPEKpW80qwC1



##Customizing the HTTP Requests
* https://docs.angularjs.org/api/ngResource/service/$resource

* Particularly
  * isArray
  * params
  * transformRequest
  * transformResponse
  * interceptor

* See also  $http interceptors.



#blends sync and async with Promises!
* https://docs.angularjs.org/api/ng/service/$q



##Managing headers
* global header on all http requests

```javascript
  $http.defaults.headers.common['auth-token'] = 'C3PO R2D2';
```

* override on a single request

```javascript
http.get('/books', {
  headers: { 'auth-token': 'C3PO R2D2' },
  });
```  

* with $resource

```javascript
    $resource( '/book/:bookId',
    { bookId: '@bookId' }, {
      update: {
        method: 'PUT',
        params: { bookId: '@bookId' },
        isArray: false,
        headers: { 'auth-token': 'C3PO R2D2' }
      }
      } );
```



##Managing auth
* login form and session cookie (traditional JEE like backend)
* single-sign-on server and Token
* OAuth
* JWT
  * https://egghead.io/series/angularjs-authentication-with-jwt

* http://blog.brunoscopelliti.com/authentication-to-a-restful-web-service-in-an-angularjs-web-app



##Integration with backend auth
https://github.com/andreareginato/oauth-ng



##Mocking REST responses in testing
* https://docs.angularjs.org/api/ngMock/service/$httpBackend



#Learn more
* http://sauceio.com/index.php/2014/07/angularjs-data-models-http-vs-resource-vs-restangular/


#Lab 11
Esercizio:

* scrivere un client REST per il seguente servizio
  * http://jsonplaceholder.typicode.com/todos

* inviare un header di autenticazione



#What have we learnt?
* how to customize REST requests witn $resource



##Other authentication approaches
* http://ionicframework.com/blog/angularjs-authentication/
* https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
* https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
