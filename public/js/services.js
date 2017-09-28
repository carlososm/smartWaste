angular.module('tradeServices', [ 'ngResource' ])
    .factory('Trade', function($resource) {
      return $resource('trades/:tradeId', {}, {
        query :
            {method : 'GET', params : {tradeId : 'trades'}, isArray : true}
      })
    });
