angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when(
            '/trades',
            {templateUrl : 'partials/trades.html', controller : mainController})
        .when(
            '/trades/:tradeId',
            {templateUrl : 'partials/trade.html', controller : tradeController})
        .otherwise({redirectTo : '/trades'});
  }
]);
