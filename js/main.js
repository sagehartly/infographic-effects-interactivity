var $fish = $('.picture-fish');
var $greenbox = $('.green-box');
var $needle = $('.picture-needle');
var $bluebox = $('.blue-box');
var $litter = $('.picture-litter');
var $greybox = $('.grey-box');
var $powder = $('.picture-powder');
var $whitebox = $('.white-box');
var $ball = $('.picture-ball');
var $orangebox = $('.orange-box');

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

$greenbox.waypoint(function () {
  $fish.addClass('picture-appear');
}, {offset: '50%'});

$bluebox.waypoint(function () {
  $needle.addClass('picture-appear');
}, {offset: '50%'});

$greybox.waypoint(function () {
  $litter.addClass('picture-appear');
}, {offset: '50%'});

$whitebox.waypoint(function () {
  $powder.addClass('picture-appear');
}, {offset: '60%'});

$orangebox.waypoint(function () {
  $ball.addClass('picture-appear');
}, {offset: '70%'});
