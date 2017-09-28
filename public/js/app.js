angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when(
            '/trades',
            {templateUrl : '/public/trades.html', controller : mainController})
        .when('/trades/:tradeId',
              {templateUrl : '/public/trade.html', controller : mainController})
        .otherwise({redirectTo : '/trades'});
  }
]);
