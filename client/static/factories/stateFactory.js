app.factory("stateFactory", ["$http", '$location', function($http, $location){
  var factory = {};
// start state functions
  factory.getStates = function(callback){
    $http({
      url:'/states',
      method:'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.createState = function(state, callback){
    $http({
      url:'/states',
      method:'POST',
      data:state
    }).then(function(res){
      callback();
    })
  }
  factory.showState = function (state_id, callback) {
    $http({
      url:'/states/'+state_id.id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
      })
  }
  factory.updateState = function (state) {
    $http({
      url: '/states/'+state._id,
      method: 'PUT',
      data:state
    }).then(function(res) {
        console.log(res.data);
    })
  }
  factory.deleteState = function(state, callback){
    $http({
      url:'/states/' + state._id,
      method: 'DELETE'
    }).then(function(res){
      if(res.status == 200){
        callback();
      }
    });
  }
// end state functions
  return factory;
}])
