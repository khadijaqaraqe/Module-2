(function () {
  angular.module('ShoppingListCheckOff',[])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    var buyItems =
    [
    {name: "Cookies",
     quantity: 10
    },
    {name: "Chocolate",
     quantity: 3
    },
    {name: "Notebook",
     quantity: 5
    },
    {name: "Pens",
     quantity: 12
    },
    {name: "iPhones 7",
     quantity: 4
    },
    {name: "MK bag",
     quantity: 1
    },
    {name: "Laptop",
     quantity: 4
    },
    {name: "Potato",
     quantity: 8
    },
    {name: "Rings",
     quantity: 2
    },
    {name: "Tissues",
     quantity: 90
    },
    {name: "Glasses",
     quantity: 17
    }
    ];
		//var buyItems = [{name:"a",quantity:10}];
		var boughtItems = [];

})();
