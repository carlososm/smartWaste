Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});

(function($) {
"use strict"; // Start of use strict

$("#account-filter-btn").click(function() {
  $("#account-filter").toggleClass("filter-hidden");
  $("#account-filter").removeClass("hidden");
  $("#activity-filter").addClass("filter-hidden");
  $("#activity-filter").addClass("hidden");
  $("#account-filter")
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

$("#newDeposit").click(function() {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
  } else {
    $(this).addClass("clicked");
    $("#newWaste").removeClass("clicked");
    $("#newMovement").removeClass("clicked");
    $(".deposit").removeClass("hidden");
    $(".waste").addClass("hidden");
    $(".movement").addClass("hidden");
  }
});
$("#newWaste").click(function() {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
  } else {
    $(this).addClass("clicked");
    $("#newDeposit").removeClass("clicked");
    $("#newMovement").removeClass("clicked");
    $(".waste").removeClass("hidden");
    $(".deposit").addClass("hidden");
    $(".movement").addClass("hidden");
  }
});
$("#newMovement").click(function() {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
  } else {
    $(this).addClass("clicked");
    $("#newWaste").removeClass("clicked");
    $("#newDeposit").removeClass("clicked");
    $(".movement").removeClass("hidden");
    $(".deposit").addClass("hidden");
    $(".waste").addClass("hidden");
  }
});

})(jQuery);

document.getElementById('account-filter-btn').click(function) {
  alert();
  $("#account-filter").toggleClass("filter-hidden");
  $("#account-filter").removeClass("hidden");
  $("#activity-filter").addClass("filter-hidden");
  $("#activity-filter").addClass("hidden");
  $("#account-filter")
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

$(document).ready(function() {
  $('#initialTime').val(new Date().toDateInputValue());
});
$(document).ready(function() {
  $('#finalTime').val(new Date().toDateInputValue());
});
