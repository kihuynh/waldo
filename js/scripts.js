$(document).ready(function() {
  $(".clickable").click(function() {
    $(".not-showing-2").fadeToggle();
    });
  $(".clickable-2").click(function() {
    $(".showing-2").fadeToggle();
    });
  $(".clickable-3").click(function() {
    $(".showing").fadeToggle();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
});
