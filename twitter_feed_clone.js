function prepareNavHandler() {
  $("nav a").hover(function() {
    $(this).find('.nav-icon').addClass('hover');
  }, function() {
    $(this).find('.nav-icon').removeClass('hover');
  });
}

$(function() {
  prepareNavHandler();
});