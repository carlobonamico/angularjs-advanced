##Topics
* Best Practices
* learning resources
* roadmap towards Angular 2.0, Javascript/ECMAScript 6 and Web Components



##Discussion
* Limits of Angular
  * Dynamic page rendering, so SEO is hard
    * temporary solutions with PhantomJS on the server side
    * a few cloud-based services
  * Tooling is good but can improve
  * too magic vs too constrictive

  * http://www.thoughtworks.com/insights/blog/angularjs-bad-bits

  * Limits of Angular vs the need for Software Engineering Principles



#Lessons learnt
* Like all the magic wands, you could end up like Mikey Mouse as the apprentice sorcerer
* Getting started is very easy
* But to go further you need to learn the key concepts
  * scopes
  * dependency injection
  * directives
  * promises

* http://voidcanvas.com/why-angularjs-is-generally-better-than-emberjs-and-backbonejs/



##Best Practices
* lightweight controllers
* move everything that you can to services
  * and test them

* encapsulate components with directives

* use good names!
* define your own additional conventions



##Best practices
* http://nathanleclaire.com/blog/2014/04/19/5-angularjs-antipatterns-and-pitfalls/
* http://www.objectpartners.com/2013/08/09/i-wish-i-knew-then-what-i-know-now-life-with-angularjs/
* https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917



## Selection of JS libraries
* now every possible <<insert any word>>.js exists...
* which to use in your critical project?
* copy & paste is quick, but...
* http://www.johnpapa.net/javascript-soup/



#Component based project structure
* http://www.jvandemo.com/top-5-benefits-after-6-months-of-component-driven-angularjs-development/



##Running and AngularJS app in production
* Flags
  * https://docs.angularjs.org/guide/production

* Client-side logging
* Error reporting
* http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm



##Performance
* When does it matter?

* Where does it matter
  * https://medium.com/@jeffwhelpley/is-angularjs-fast-enough-98dcf96406c8

* Performance tips
* http://www.binpress.com/tutorial/speeding-up-angular-js-with-simple-optimizations/135
* http://blog.scalyr.com/2013/10/angularjs-1200ms-to-35ms/



##Security
* https://docs.angularjs.org/guide/security



##Angular 1.3
* Performance
* Validation and Forms
* accessibility (ng-aria)

* Compatibility Changes mainly due to security constraint
* Migrating from 1.2.x
* https://docs.angularjs.org/guide/migration



#The Future
* AngularJS 2.0 will be _Mobile First_
* performance
* web component integration
* browser support
* [http://blog.angularjs.org/2014/03/angular-20.html](http://blog.angularjs.org/2014/03/angular-20.html)

* Web Components on Mobile
* EcmaScript 6 - ``Object.observe()`` -> ultrafast binding



##AngularJS 2.0
* Roadmap
  * http://angularjs.blogspot.it/2014/03/angular-20.html
  * http://radar.oreilly.com/2014/09/the-future-of-angularjs.html

* Preparing for Angular 2.0
  http://rangle.io/blog/articles/why-we-look-forward-to-angular-2/

* Components
  * https://github.com/angular/watchtower.js

* To keep up-to-date
  * Weekly meeting notes https://docs.google.com/document/d/150lerb1LmNLuau_a_EznPV1I1UHMTbEl61t4hZ7ZpS0/mobilebasic


#IDE Tools
  * Atom
  * https://github.com/angular-ui/AngularJS-Atom/releases
  * Eclipse
  * http://blog.diniscruz.com/2014/02/using-angularjs-in-eclipse-part-1.html
  * Brackets
  * https://github.com/angular-ui/AngularJS-brackets



#Learn more
* Style guides
  * https://github.com/johnpapa/angularjs-styleguide
  * https://github.com/toddmotto/angularjs-styleguide



#Lab 13
Esercizio:

* eseguire dei test end-to-end


#What have we learnt?
* what to watch for as your application grows



#To learn even more
* End-to-End testing
  * https://docs.angularjs.org/guide/e2e-testing
  * Demo
    * https://github.com/brunoscopelliti/todooo

* E2E specific mocking
  * https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend

* Cucumber-js based ATDD
  * https://github.com/whyvez/angular-cucumber-example
