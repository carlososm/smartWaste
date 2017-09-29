angular.module('angularSmartWaste', [ 'ngRoute' ]).config(function($routeProvider, $locationProvider) {
  $routeProvider
      .when('/contId',
            {templateUrl : 'partials/home.html', controller : mainController})
      .when('/new',
            {templateUrl : 'partials/new.html', controller : newController})
      .when('/contId/trades', {
        templateUrl : 'partials/trades.html',
        controller : mTradesController
      })
      .when('/contId/trades/:tradeId',
            {templateUrl : 'partials/trade.html', controller : tradeController})
      .when('/contId/newtrade', {
        templateUrl : 'partials/newtrade.html',
        controller : mTradesController
      })
      .when('/contId/accounts', {
        templateUrl : 'partials/accounts.html',
        controller : mAccountsController
      })
      .when('/contId/accounts/:accountId', {
        templateUrl : 'partials/account.html',
        controller : accountController
      })
      .when('/contId/newaccount', {
        templateUrl : 'partials/newaccount.html',
        controller : mAccountsController
      })
      .otherwise({redirectTo : '/contId'});

  $locationProvider.html5Mode(true);
  }
]);
