app.controller('statesController',['$scope', '$http', 'stateFactory', function($scope, $http, stateFactory){

    function getStates(){
      stateFactory.getStates(function(states){
        $scope.states = states;
      })
    };

    $scope.createState = function(state){
      stateFactory.createState(state, getStates);
    };

    $scope.deleteState = function(state){
      stateFactory.deleteState(state, getStates);
    };

    getStates();
}]);
