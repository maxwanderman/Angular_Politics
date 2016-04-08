var app = angular.module('randomPol', []);

app.controller('PoliticController', function($scope, $http){
  $scope.republicans= [];
  $scope.democrats = [];
  $scope.final = [];
  $scope.result = '';
  $scope.resulting = false;

$scope.getCandidates = function() {
  $http.get('/republicans').then(function(response){
    $scope.republicans = response.data;
    console.log($scope.republicans.length);
  });
  $http.get('/democrats').then(function(response){
    $scope.democrats = response.data;
    $scope.final = $scope.democrats.concat($scope.republicans);
    console.log($scope.final);
    shuffle($scope.final);
    console.log($scope.final);
    $scope.result = $scope.final[0];
    $scope.getResult = function(){
      $scope.resulting = true;
    };

  });
};

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

});
