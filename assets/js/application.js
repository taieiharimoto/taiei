$(window).load(function() {
  window.swiper = new Swipe(document.getElementById('carousel'));
  var arrowOpacity = $('a.left').css('opacity');

  var contentWidth = 11.0 / 8.5 * window.innerHeight;
  var navWidth = (window.innerWidth - contentWidth) / 2;

  $('a.left').click(function() {
    window.swiper.prev();
    return false;
  });

  $('a.left, a.right').hover(
    function() {
      $(this).css('opacity', 1.0);
    },
    function() {
      $(this).css('opacity', arrowOpacity);
    }
  );

  $('a.right').click(function() {
    window.swiper.next();
    return false;
  });
});
