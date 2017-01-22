var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'/partials/home.html'
        })
        .when('/heightwidth', {
            templateUrl:'/partials/heightwidth.html'
        })
        .when('/statescapitals', {
            templateUrl:'/partials/states.html',
            controller: 'statesController'
        })
        .when('/editstate/:id', {
          templateUrl:'/partials/editstate.html',
          controller: 'editStateController'
        })
        .otherwise({
            redirectTo:'/'
        })
})
