(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
  
    toBuy.items = ShoppingListCheckOffService.listToBuy;

    toBuy.bought = function (item){
      ShoppingListCheckOffService.removeFromToBuyList(item);
    };

  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.boughtList;
  }


  // crete shopping list service
  function ShoppingListCheckOffService() {
    var service = this;

    service.listToBuy = listToBuy;
    service.boughtList = [];

    service.removeFromToBuyList = function (item){
      // service.addToBuyList(item);
      service.boughtList.push(service.listToBuy[item]);
      service.listToBuy.splice(item, 1);
      console.log("addToBoughtList: ", listToBuy[item]);
      console.log("item removed: ", listToBuy[item]);
    };

  }

  var listToBuy = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "chocolate bars",
      quantity: 5
    },
    {
      name: "coffe backs",
      quantity: 8
    },{
      name: "sugar backs",
      quantity: 7
    },
    {
      name: "muffins",
      quantity: 4
    },
    {
      name: "croissant",
      quantity: 4
    }
  ];

  


})();