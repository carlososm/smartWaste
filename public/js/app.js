angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/trades',
              {templateUrl : '/trades.html', controller : mainController})
        .when('/trades/:tradeId',
              {templateUrl : '/trade.html', controller : mainController})
        .otherwise({redirectTo : '/trades'});
  }
]);
