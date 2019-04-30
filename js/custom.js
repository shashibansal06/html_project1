$(".menu-icon img").click(function(){
    $(".nav").fadeIn();
});
$(".close-nav").click(function(){
    $(".nav").fadeOut();
});

new WOW().init();

jQuery(document).ready(function($) {
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    } );
    return false;
  } );
} );