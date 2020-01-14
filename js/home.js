$(function(){

  // アコーディオン１つ目を開く
  $('.open').show();

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

  // small screenのみ動作
  if (!window.matchMedia( '(min-width: 768px)' ).matches) {
    $('.consulting-details-open').click(function(){

      var $toggleTarget = $(this).parents('.attending-flow-box').find('.attending-flow-box-bottom');
      var $toggleAngle = $(this).parents('.attending-flow-box').find('.fa-angle-down, .fa-angle-up');

      if($toggleTarget.hasClass('open')){
        // スライド格納
        $toggleTarget.removeClass('open');
        $toggleTarget.slideUp();

        // 矢印ボタンの切り替え
        $toggleAngle.removeClass('fa-angle-up').addClass('fa-angle-down');

      } else {
        // スライド表示
        $toggleTarget.addClass('open');
        $toggleTarget.slideDown();

        // 矢印ボタンの切り替え
        $toggleAngle.removeClass('fa-angle-down').addClass('fa-angle-up');

      }
    });
  }
});
