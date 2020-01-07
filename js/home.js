$(function(){

  var headerHeight = $('header').height();

  $('.contact-form-jump a, .header-right a').click(function(){

    var id = $(this).attr('href');
    var position = $(id).offset().top - headerHeight;
    var scrollSpeed = 300;

    $('html, body').animate({
      'scrollTop': position
    }, scrollSpeed);
    return false;
  });
});
