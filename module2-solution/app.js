(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope) {

    $scope.parseInput = function () {
      if($scope.userInput == undefined){
        $scope.message = "Please enter data first";
        $scope.userInput = '';
      }

      /* in this split method the empty comma consider a value
       * item 1, item2,,item3 is Too much
      */
      
      var inputSplit = $scope.userInput.split(',');
      if(inputSplit == '') {
        $scope.message = "Please enter data first";
        $scope.messgeColor = "red";
      }else if( inputSplit.length <= 3) {
        $scope.message = "Enjoy";
        $scope.messgeColor = "green";
      }else {
        $scope.message = "Too much";
      }

    };
  }


})();