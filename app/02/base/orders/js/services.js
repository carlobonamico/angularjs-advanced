angular.module("cart.services",[]).service("cartService",
        function (){
            var items = [];
            
            this.add = function (product){
                items.push(product);
            };
            
            this.getCart = function(){
                return {
                    items : items
                };
            };
            
            this.getTotalPrice = function()
            {
                var total = 0;
                items.forEach(function(item){
                    total = total + item.price;
                });
                return total;
            }
                
            
            
        });