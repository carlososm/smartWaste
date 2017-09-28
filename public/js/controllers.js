function mainController($scope, $http) {
  $scope.formData = {};

  // Cuando se cargue la página, pide del API trades los trades
  $http.get('/trades')
      .success(function(data) {
        $scope.trades = data;
        console.log(data)
      })
      .error(function(data) { console.log('Error 1: ' + data); });

  // Cuando se añade un nuevo TRADE, manda el texto a la API
  $scope.createTrade = function() {
    $http.post('/trades', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 2:' + data); });
  };
}

function PollItemCtrl($scope, $routeParams, Poll) {
  $scope.poll = Poll.get({pollId : $routeParams.pollId});
  $scope.vote = function() {};
}

function tradeController($scope, $http, Trade) {

  $scope.trade = Trade.get({tradeId : $http.tradeId})
                     .success(function(data) {
                       $scope.trade = data;
                       console.log(data);
                     })
                     .error(function(data) { console.log('Error 3:' + data); });

  // // Muestra un TRADE despues de checkearlo como acabado
  // $http.get('/trades/' + tradeId)
  //     .success(function(data) {
  //       $scope.trades = data;
  //       console.log(data);
  //     })
  //     .error(function(data) { console.log('Error 3:' + data); });

  // Borra un TRADE despues de checkearlo como acabado
  $scope.deleteTrade = function(id) {
    $http.delete('/trades/' + id)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 4:' + data); });
  };
}
