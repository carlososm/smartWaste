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
        .when('/newtrade', {
          templateUrl : 'partials/newtrade.html',
          controller : mainController
        })
        .otherwise({redirectTo : '/trades'});
  }
]);
