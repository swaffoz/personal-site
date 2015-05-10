$(window).load(preparePage);

function preparePage() {
  $("#main").addClass("animated fadeInUp");
  $("#sharpie").addClass("animated rollIn");
  $("#twizzlers").addClass("animated rollIn");
  $("a").hover(wiggle, stopWiggle);
}

function wiggle() {
  $(this).addClass("animated infinite pulse");
}

function stopWiggle() {
  $(this).removeClass("animated infinite pulse");
}