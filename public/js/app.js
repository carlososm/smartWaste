angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/trades', {
          templateUrl : '/partials/trades.html',
          controller : mainController
        })
        .when(
            '/trades/:tradeId',
            {templateUrl : '/partials/trade.html', controller : mainController})
        .otherwise({redirectTo : '/trades'});

    $locationProvider.html5Mode(true);
  }
]);
