
// open/close nav

$(document).ready(function () {
  $(".burger").click(function (e) {
    $(".burger__line,.header__nav").toggleClass('active');
    $("body").toggleClass('lock');
  })
});


//   active class switching for btns

$('.header__boxes').on('click', '.header__button', function () {
  $(this).addClass('active').siblings().removeClass('active');
});




