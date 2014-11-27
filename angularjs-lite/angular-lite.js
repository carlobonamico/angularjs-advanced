console.log("started");

function Scope()
{
  console.log("Scope created");
  this.$$watchers = [];

  var that = this;
  this.$watch = function (expression, listener)
  {
    console.log("Watch created for "+expression);

    that.$$watchers.push({
      expression : expression,
      listener : listener
    });

    console.log(this.$$watchers);

  };

  this.$digest = function ()
  {
    that.$$watchers.forEach(function (watch)
    {
          console.log("Checking "+watch.expression);

          var oldValue = watch.oldValue;
          var newValue = that[watch.expression];

          console.log("Old "+oldValue+" new "+newValue);
          if (oldValue != newValue)
          {
            console.log(watch.expression+" changed!");

            watch.listener(oldValue, newValue);
          }
          watch.oldValue = newValue;


    });

    this.$apply = function (action)
    {
        action();
        that.$digest();
    };

  };

  this.$compile = function (element)
  {
    console.log("Compiling "+element);
    if (element.attributes['ng-bind'])
    {
        console.log("Trovato ng-bind su "+element);

        $scope.$watch("message", function (oldValue, newValue){
          console.log("message modified from "+oldValue +" to "+newValue);

          element.innerHTML = newValue;
        });

    }

    if (element.attributes['ng-model'])
    {
      console.log("Trovato ng-model su "+element);

      $scope.$watch("message", function (oldValue, newValue){
        console.log("message modified from "+oldValue +" to "+newValue);

        element.value = newValue;
      });

      element.addEventListener('keyup', function(){
        console.log("keyup sul campo di input");

        $scope.$apply(function(){
          $scope.message = element.value;

        });
        
      });

    }

    Array.prototype.forEach.call(element.children,
      function (child){
        console.log(child);
        that.$compile(child);

    });


  }

}



document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  $scope = new Scope();
  $scope.$compile(document.body);



  $scope.message = "Codemotion";



  console.log($scope.$$watchers);

  $scope.message = "Codemotio1";
  $scope.$digest();

  $scope.$digest();

  $scope.message = "Codemotio2";
  $scope.$digest();



});
