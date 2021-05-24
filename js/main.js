// document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});
// var movefun = function( event ){
// 	event.preventDefault();
// }
 
// // スクロール停止の処理
// window.addEventListener( 'touchmove' , movefun , { passive: false } );
 
// // スクロール停止することを停止する処理
// window.removeEventListener( 'touchmove' , movefun, { passive: false } )

setTimeout(function(){
  $(function() {
      $("#loading").fadeOut();
  });
},1500);
   
$(function() {
  // var h = $(window).height();
  var h = window.innerHeight ? window.innerHeight: $(window).height();
  $('#loader-bg ,#loader').height(h).css('display','block');
  // ロード中にに画面サイズを変えられると位置がおかしくなるので、cssをjsで読み込む
  var style = '<link rel="stylesheet" href="css/animation.css">';
  $('head link:last').after(style);
  $('#contents').css('display', 'none');
});

setTimeout(function(){
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#contents').css('display', 'block');
},1500);

$('.menu').on('click',function(){
  $('body').toggleClass('noscroll');
  $('.menu__slide').toggleClass('slide');
  $('.menu span').toggleClass('menu__close');
  $('.top__middle').toggleClass('top__middle--close');
  $('.middle__left').toggleClass('middle__left--close');
  $('.middle__right').toggleClass('middle__right--close');
  $('.bottom__middle').toggleClass('bottom__middle--close');
  $('header').fadeToggle(300);
  $('main').fadeToggle(300);
  $('footer').fadeToggle(300);
 });

 $('.menu__nav a').on('click',function(){
  $('body').toggleClass('noscroll');
  $('.menu__slide').toggleClass('slide');
  $('.menu span').toggleClass('menu__close');
  $('.top__middle').toggleClass('top__middle--close');
  $('.middle__left').toggleClass('middle__left--close');
  $('.middle__right').toggleClass('middle__right--close');
  $('.bottom__middle').toggleClass('bottom__middle--close');
  $('header').fadeToggle(300);
  $('main').fadeToggle(300);
  $('footer').fadeToggle(300);
 });

 lightbox.option({
  'wrapAround': true,
  'disableScrolling' : true,
  'alwaysShowNavOnTouchDevices' : true,
})

$(function(){
  $('.infiniteslide').infiniteslide({
    clone: 2,
    pauseonhover: false
  });
})