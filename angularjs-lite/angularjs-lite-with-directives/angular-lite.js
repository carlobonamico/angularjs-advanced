console.log("started");

var directiveDefinitions =
    [
        {
            name : "ng-bind",
            link : function (element){
                    var expression = element.attributes["ng-bind"].value;

                console.log("Trovato ng-bind su "+element);

                $scope.$watch(expression, function (oldValue, newValue){
                  console.log("message modified from "+oldValue +" to "+newValue);

                  element.innerHTML = newValue;
                });
            }
        },
        {
            name : "ng-hide",
            link : function (element){
                var expression = element.attributes["ng-hide"].value;

                console.log("Trovato ng-hide su "+element);

                $scope.$watch(expression, function (oldValue, newValue){
                  console.log("expression modified from "+oldValue +" to "+newValue);

                  element.hidden = newValue;
                });
            }
        },
        {
            name : "ng-model",
            link: function (element){
                 console.log("Trovato ng-model su "+element);
                var expression = element.attributes["ng-model"].value;

              $scope.$watch(expression, function (oldValue, newValue){
                console.log(expression+" modified from "+oldValue +" to "+newValue);

                element.value = newValue;
              });

      element.addEventListener('keyup', function(){
        console.log("keyup sul campo di input");

        $scope.$apply(function(){
          $scope[expression] = element.value;

        });

      });
            }
        }
    ];

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

    directiveDefinitions.forEach(function (directiveDefinition)
    {
       if (element.attributes[directiveDefinition.name])
       {
           directiveDefinition.link(element);
       }
    });

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
   $scope.message = "Codemotion";
    $scope.flag = true;

    $scope.$compile(document.body);


    $scope.$digest();


});
