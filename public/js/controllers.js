app.run([
  '$rootScope',
  function($rootScope) {
    $rootScope.contName = "";
    $rootScope.contId = "";
  }
]);

function mainController($scope, $routeScope, $http, $routeParams) {
  var contId = $routeParams.contId;
  $routeScope.contId = contId;
  // // Muestra un CONTABILITY despues de checkearlo como acabado
  $http.get('/' + contId)
      .success(function(data) {
        $scope.contability = data;
        console.log(data);
      })
      .error(function(data) { console.log('Error 3:' + data); });

  // Cuando se añade un nuevo CONTABILITY, manda el texto a la API
  $scope.createCont = function() {
    console.log($scope.contData);
    $http.post('/contabilities', $scope.contData)
        .success(function(data) {
          $scope.contData = {};
          $scope.contabilities = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 2:' + data); });
  };

  /** sign in control **/
  $("#signin-intro").click(function() {
    $("#signin-div").toggleClass("hidden");
  });

  /** filter control **/
  $("#account-filter-btn").click(function() {
    $("#activity-filter").toggleClass("filter-hidden");
    $("#activity-filter").removeClass("hidden");
    $("#account-filter").addClass("filter-hidden");
    $("#account-filter").addClass("hidden");
    $("#activity-filter")
        .bind("animationend webkitAnimationnd oAnimationEnd MSAnimationEnd",
              function() {
                if ($(this).hasClass("filter-hidden")) {
                  $(this).addClass("hidden");
                } else {
                  $(this).removeClass("hidden")
                }
              });
    $("body").toggleClass("no-scroll");
  });
  $("#activity-filter-btn").click(function() {
    $("#activity-filter").toggleClass("filter-hidden");
    $("#activity-filter").removeClass("hidden");
    $("#account-filter").addClass("filter-hidden");
    $("#account-filter").addClass("hidden");
    $("#activity-filter")
        .bind("animationend webkitAnimationnd oAnimationEnd MSAnimationEnd",
              function() {
                if ($(this).hasClass("filter-hidden")) {
                  $(this).addClass("hidden");
                } else {
                  $(this).removeClass("hidden")
                }
              });
    $("body").toggleClass("no-scroll");
  });

  $(".filter .fa-times").click(function() {
    $(this).parent().parent().addClass("filter-hidden");
    $(this).parent().parent().bind(
        "animationend webkitAnimationnd oAnimationEnd MSAnimationEnd",
        function() {
          if ($(this).hasClass("filter-hidden")) {
            $(this).addClass("hidden");
          } else {
            $(this).removeClass("hidden")
          }
        });
    $("body").toggleClass("no-scroll");
  });
}

function newController($scope, $http) {}

function mTradesController($scope, $http) {
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

function tradeController($scope, $http, $routeParams) {
  var tradeId = $routeParams.tradeId;
  // // Muestra un TRADE despues de checkearlo como acabado
  $http.get('/trades/' + tradeId)
      .success(function(data) {
        $scope.trades = data;
        console.log(data);
      })
      .error(function(data) { console.log('Error 3:' + data); });

  // Borra un TRADE despues de checkearlo como acabado
  $scope.deleteTrade = function(id) {
    $http.delete('/trades/' + id)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 4:' + data); });
  };

  // Edita un TRADE despues de checkearlo como acabado
  $scope.updateTrade = function(id) {
    $http.update('/trades/' + id, $scope.trades)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 4:' + data); });
  };
}

function mAccountsController($scope, $http) {}

function accountController($scope, $http) {}
