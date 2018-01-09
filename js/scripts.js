$(document).ready(function() {
  $(".clickable").click(function() {
    $(".not-showing-2").fadeToggle();
    // $(".not-showing").fadeToggle();

    });
  $(".clickable-2").click(function() {
    $(".showing-2").fadeToggle();
    // $(".not-showing").fadeToggle();
    // $(".showing").toggle();
    });
  $(".clickable-3").click(function() {

    $(".showing").fadeToggle();


  });
});
