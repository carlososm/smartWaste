angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/trades',
              {templateUrl : '/trades.html', controller : PollListCtrl})
        .when('/trades/:tradeId',
              {templateUrl : '/trade.html', controller : PollItemCtrl})
        .otherwise({redirectTo : '/trades'});
  }
]);
