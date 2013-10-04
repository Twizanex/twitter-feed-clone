function prepareNavHandler() {
  $("nav a").hover(function() {
    $(this).find('.nav-icon').addClass('hover');
  }, function() {
    $(this).find('.nav-icon').removeClass('hover');
  });
}

function prepareSettingsHandler() {
  $("#settings a").hover(function() {
    $(this).find('.settings-icon').addClass('hover-icon');
    $(this).find('.settings-caret').addClass('hover-caret');    
  }, function() {
    $(this).find('.settings-icon').removeClass('hover-icon');
    $(this).find('.settings-caret').removeClass('hover-caret');    
  });
}

$(function() {
  prepareNavHandler();
  prepareSettingsHandler();
});