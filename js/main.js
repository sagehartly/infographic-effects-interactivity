$('.header').on('mouseover', function () {
  $('.header-title').addClass('colour-header');
});

$('.header').on('mouseout', function () {
  $('.header-title').removeClass('colour-header');
});

$('.green-section').on('click', function () {
  $('.picture-fish').toggleClass('picture-actionleft');
});

$('.blue-section').on('click', function () {
  $('.picture-needle').toggleClass('picture-actionright');
});

$('.grey-section').on('click', function () {
  $('.picture-litter').toggleClass('picture-actionleft');
});

$('.white-section').on('click', function () {
  $('.picture-powder').toggleClass('picture-actionright');
});

$('.orange-section').on('click', function () {
  $('.picture-ball').toggleClass('picture-actionleft');
});
