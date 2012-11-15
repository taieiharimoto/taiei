$(window).load(function() {
  var contentWidth = 11.0 / 8.5 * window.innerHeight;
  var navWidth = (window.innerWidth - contentWidth) / 2;

  window.mySwipe = new Swipe(document.getElementById('myCarousel'));

  $('a.left').click(function() {
    window.mySwipe.prev();
    return false;
  });

  $('a.right').click(function() {
    window.mySwipe.next();
    return false;
  })
});