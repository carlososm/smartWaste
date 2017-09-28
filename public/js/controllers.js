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

function tradeController($scope, $http) {
  // Muestra un TRADE despues de checkearlo como acabado
  $scope.showTrade = function(id) {
    console.log('ID: ' + id);
    $http.get('/trades/' + id)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 3:' + data); });
  };

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
