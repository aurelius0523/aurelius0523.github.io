$(document).ready(() => {
  $("#about_scroll").fadeOut();
  $("#work_scroll").fadeOut();
  $("#contact_scroll").fadeOut();

  $("#career").click(() => {
    $("#index").fadeOut();
    $("#about_scroll").fadeIn();
    $("#about_left").addClass("animated slideInLeft");
    $("#about_right").addClass("animated slideInRight");
  });

  $("#technology").click(() => {
    $("#index").fadeOut();
    $("#work_scroll").fadeIn();
    $("#work_left").addClass("animated slideInLeft");
    $("#work_right").addClass("animated slideInRight");
  });

  $("#contact").click(() => {
    $("#index").fadeOut();
    $("#contact_scroll").fadeIn();
    $("#contact_left").addClass("animated slideInLeft");
    $("#contact_right").addClass("animated slideInRight");
  });

  $(".back").click(() => {
    $(".pages").fadeOut();
    $("#index").fadeIn();
    $("#index_left").addClass("animated slideInLeft");
    $("#index_right").addClass("animated slideInRight");
  });
});
