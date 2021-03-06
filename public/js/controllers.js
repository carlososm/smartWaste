function mainController($scope, $rootScope, $http, $routeParams) {
  $scope.signinData = {};
  var contId;

  $scope.searchCont = function() {
    contId = $scope.signinData.contId;
    $rootScope.contId = contId;
    $http.get('/api/contabilities/' + contId)
        .success(function(data, err, status) {
          $("#wrong-signin-cont").addClass("hidden");
          $("#signin-div").removeClass("hidden");
        })
        .error(function(data) {
          $("#wrong-signin-cont").removeClass("hidden");
          $("#signin-div").addClass("hidden");
        });

    $("#signin-div .close-btn").click(function() {
      $("#signin-div").addClass("hidden");
    })
  };

  // Cuando se añade un nuevo CONTABILITY, manda el texto a la API
  $scope.createCont = function() {
    $http.post('/api/contabilities', $scope.contData)
        .success(function(data) {
          $scope.contData = {};
          $scope.contability = data;
          window.location.replace('/' + $scope.contability._id);
        })
        .error(function(data) { console.log('Error:' + data); });
  };
}

function contController($scope, $rootScope, $http, $routeParams) {
  var contId = $routeParams.contId;
  $rootScope.contId = contId;
  // // Muestra un CONTABILITY despues de checkearlo como acabado
  $http.get('/api/' + contId)
      .success(function(data) {
        $scope.contability = data;
        // console.log(data);
      })
      .error(function(data) { console.log('Error 3:' + data); });

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

function newController($scope, $rootScope, $http) {}

function mTradesController($scope, $rootScope, $http) {
  $scope.formData = {};

  // Cuando se cargue la página, pide del API trades los trades
  $http.get('/api/' + $rootScope + '/trades')
      .success(function(data) {
        $scope.trades = data;
        console.log(data)
      })
      .error(function(data) { console.log('Error 1: ' + data); });

  // Cuando se añade un nuevo TRADE, manda el texto a la API
  $scope.createTrade = function() {
    $http.post('/api/' + $rootScope + '/trades', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 2:' + data); });
  };
}

function tradeController($scope, $rootScope, $http, $routeParams) {
  var tradeId = $routeParams.tradeId;
  // // Muestra un TRADE despues de checkearlo como acabado
  $http.get('/api/' + $rootScope + '/trades/' + tradeId)
      .success(function(data) {
        $scope.trades = data;
        console.log(data);
      })
      .error(function(data) { console.log('Error 3:' + data); });

  // Borra un TRADE despues de checkearlo como acabado
  $scope.deleteTrade = function(id) {
    $http.delete('/api/' + $rootScope + '/trades/' + id)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 4:' + data); });
  };

  // Edita un TRADE despues de checkearlo como acabado
  $scope.updateTrade = function(id) {
    $http.update('/api/' + $rootScope + '/trades/' + id, $scope.trades)
        .success(function(data) {
          $scope.trades = data;
          console.log(data);
        })
        .error(function(data) { console.log('Error 4:' + data); });
  };
}

function mAccountsController($scope, $rootScope, $http) {}

function accountController($scope, $rootScope, $http) {}
