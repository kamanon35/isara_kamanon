$(function(){

  // アコーディオン１つ目を開く
  $('.open').show();

  $('.contactform-jump').click(function(){

    var headerHeight = $('header').height();
    var id = $(this).attr('href');
    var position = $(id).offset().top - headerHeight;
    var scrollSpeed = 500;

    $('html, body').animate({
      scrollTop: position
    }, scrollSpeed);

    return false;
  });

  $('.question-container').click(function(){

    var $toggleTarget = $(this).next('.question-description');
    var $toggleAngle = $(this).find('.fa-angle-down, .fa-angle-up');
    toggleChangePanel($toggleTarget, $toggleAngle);
  });

  // small screenのみ動作
  if (!window.matchMedia( '(min-width: 768px)' ).matches) {
    $('.consulting-details-open').click(function(){

      var $toggleTarget = $(this).parents('.attending-flow-box').find('.attending-flow-box-bottom');
      var $toggleAngle = $(this).parents('.attending-flow-box').find('.fa-angle-down, .fa-angle-up');

      toggleChangePanel($toggleTarget, $toggleAngle);
    });
  }

  // 一番上に戻るボタン
  $('#pagetop').click(function(){
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });

  // panelの表示・非表示を切り替え
  function toggleChangePanel($toggleTarget, $toggleAngle){

    if($toggleTarget.hasClass('open')){
      // スライド格納
      $toggleTarget.removeClass('open');
      $toggleTarget.slideUp(300, 'swing');

      // 矢印ボタンの切り替え
      $toggleAngle.removeClass('fa-angle-up').addClass('fa-angle-down');

    } else {
      // スライド表示
      $toggleTarget.addClass('open');
      $toggleTarget.slideDown(300, 'swing');

      // 矢印ボタンの切り替え
      $toggleAngle.removeClass('fa-angle-down').addClass('fa-angle-up');
    }
  }
});
