angular.module('angularSmartWaste', []).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when(
            '/trades',
            {templateUrl : 'partials/trades.html', controller : mainController})
        .when('/trades/:tradeId', {
          templateUrl : 'partials/trade.html',
          controller : tradeController(: tradeId)
        })
        .when('/newtrade', {
          templateUrl : 'partials/newtrade.html',
          controller : mainController
        })
        .otherwise({redirectTo : '/trades'});
  }
]);

// angular.module('pollServices', ['ngResource']). factory('Poll',
// function($resource) { return $resource('polls/:pollId', {}, { query: {
// method: 'GET', params: { pollId: 'polls' }, isArray: true } }) });
