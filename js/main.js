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

var $fish = $('.picture-fish')
var $greenbox = $('.green-box')

$greenbox.waypoint(function () {
  $fish.addClass('picture-appear');
}, {offset: '50%'});

var $needle = $('.picture-needle')
var $bluebox = $('.blue-box')

$bluebox.waypoint(function () {
  $needle.addClass('picture-appear');
}, {offset: '50%'});

var $litter = $('.picture-litter')
var $greybox = $('.grey-box')

$greybox.waypoint(function () {
  $litter.addClass('picture-appear');
}, {offset: '40%'});

var $powder = $('.picture-powder')
var $whitebox = $('.white-box')

$whitebox.waypoint(function () {
  $powder.addClass('picture-appear');
}, {offset: '50%'});

var $ball = $('.picture-ball')
var $orangebox = $('.orange-box')

$orangebox.waypoint(function () {
  $ball.addClass('picture-appear');
}, {offset: '70%'});
