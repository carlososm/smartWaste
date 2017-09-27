function mainController($scope, $http) {
  $scope.formData = {};

  // Cuando se cargue la página, pide del API trades los trades
  $http.get('/trades')
      .success(function(data) {
        $scope.trades = data;
        console.log(data)
      })
      .error(function(data) { console.log('Error: ' + data); });

  // Cuando se añade un nuevo TODO, manda el texto a la API
  $scope.createTrade = function() {
    $http.post('../../trades', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error:' + data); });
  };

  // Borra un TODO despues de checkearlo como acabado
  $scope.deleteTrade = function(id) {
    $http.delete('/api/trades/' + id)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error:' + data); });
  };
}
