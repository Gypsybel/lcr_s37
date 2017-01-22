app.controller('editStateController',['$scope', '$http', '$routeParams', 'stateFactory', function($scope, $http, $routeParams, stateFactory){

  stateFactory.showState($routeParams, function (state){
    $scope.state = state[0];
  });

  $scope.updateState = function(state) {
    stateFactory.updateState(state);
  };

}]);
