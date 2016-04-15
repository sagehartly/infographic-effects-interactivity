$('.header').on('mouseover', function() {
  $('.headerTitle').addClass('colourHeader');
});

$('.header').on('mouseout', function() {
  $('.headerTitle').removeClass('colourHeader');
});

$('.green-section').on('click', function() {
  $('.pictureFish').toggleClass('pictureActionLeft');
});

$('.blue-section').on('click', function() {
  $('.pictureNeedle').toggleClass('pictureActionRight');
});

$('.grey-section').on('click', function() {
  $('.pictureLitter').toggleClass('pictureActionLeft');
});

$('.white-section').on('click', function() {
  $('.picturePowder').toggleClass('pictureActionRight');
});

$('.orange-section').on('click', function() {
  $('.pictureBall').toggleClass('pictureActionLeft');
});
