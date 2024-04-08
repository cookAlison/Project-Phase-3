$(document).mousemove(function(event) {
    $("#follow").css({
      left: event.pageX - 1366,
      top: event.pageY + 25
    });
  });