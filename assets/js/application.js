$(window).load(function() {
  window.swiper = new Swipe(document.getElementById('carousel'));

  $('a.left').click(function() {
    window.swiper.prev();
  });

  $('a.right').click(function() {
    window.swiper.next();
  });
});
