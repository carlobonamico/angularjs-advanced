##Topics
* UI libraries overview
  * Google material design
  * angular ui
    * ng-grid and advanced grids
  * ionicframework
  * other widget libraries (KendoUI, Wijimo, etc…)



##Material Design for Angular
* https://material.angularjs.org/#/

* Demo
  * https://material.angularjs.org/#/demo/material.components.list



##Angular UI
* Bootstrap based components
  * http://angular-ui.github.io/bootstrap

* Utilities
  * http://angular-ui.github.io/ui-utils

* http://angular-ui.github.io/



##ng-grid
* http://angular-ui.github.io/ng-grid
* http://ui-grid.info/



##KendoUI
* http://demos.telerik.com/kendo-ui/
* added native angular support
* jquery-based (but it is hidden within the directives )
* still some issues with mixed templates if you want to customize a component



##Kendo-UI Edition
* Open Source and free Core edition
  * https://github.com/telerik/kendo-ui-core
* 40+ widgets

* Kendo-UI Professional
  * adds grid, charts, data visualization



##Wijimo
* http://wijmo.com/
* Full client-side spreadsheet
  * SpreadJs



##Comparisons
* http://erictopia.com/2012/07/comparison-of-kendo-ui-and-wijmo-part-1/



##Mobile Support - Enter Ionic Framework
* AngularJS-based, Open Source
* performance obsessed
* mobile-looking
* extensible

<img src="images/ionic.png" class="centerImage"/>

* [http://ionicframework.com/](http://ionicframework.com/)
* [http://ionicframework.com/getting-started/](http://ionicframework.com/getting-started/)
* [http://ionicframework.com/docs/guide/](http://ionicframework.com/docs/guide/)



#What's inside?
* Ionic CSS
* Ionic Icons
* Ionic Directives

* and support Tooling



#Ionic CSS
* elegant yet very lightweight

<img src="images/ionic-css.png" class="sideImage"/>

```
<div class="list">
<div class="item item-divider">
Candy Bars
</div>
<a class="item" href="#">
Butterfinger
</a>
</div>
```

* [http://ionicframework.com/docs/](http://ionicframework.com/docs/)

* 3D animations, HW accelerated
* sass-based for custom theming
* 500 free icons (ionicons)



#Ionic Directives
* mobile navigation and interactions
```
<ion-list>
<ion-item ng-repeat="item in items"
item="item"
can-swipe="true"
option-buttons="itemButtons">
</ion-item>
</ion-list>
```



#
<img src="images/ionic-list.png" class="sideImage"/>



##Ionic mobile-specific apis
* services for
  * gestures
  * navigation
* [http://ionicframework.com/docs/api](http://ionicframework.com/docs/api)

* [http://plnkr.co/edit/Mcw6F2BQP3RbB8ZhBYRl?p=preview](http://plnkr.co/edit/Mcw6F2BQP3RbB8ZhBYRl?p=preview)



#Navigation
* based on UI-Router
* [http://angular-ui.github.io/ui-router](http://angular-ui.github.io/ui-router)
* sub-views (e.g. Tabs)
* per-view navigation history

* UI Gallery
* [http://ionicframework.com/present-ionic/slides/#/16 ](http://ionicframework.com/present-ionic/slides/#/16 )



#Ionic Tooling
* PhoneGap based build chain

```
$ npm -g install ionic
$ ionic start myApp tabs

$ cd myApp
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```



#Learn more
* https://www.airpair.com/ionic-framework/posts/hybrid-apps-ionic-famous-f7-onsen



#Lab 12
Esercizio:

* integrate ng-grid to display pizza menu data

* Implementare la form di signup con angular-material



#What have we learnt?
* characteristics of the main widget libraries for AngularJS



#To learn even more
* https://docs.angularjs.org/guide/animations
