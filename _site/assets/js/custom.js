// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});
window.onload=function(){
  var arr=['himalayan','sweden','nevada','new-zealand','new-york','malaysia','indonesia','canyon']
    var index = Math.floor((Math.random()*arr.length)); 
    $("#banner img").attr("src",$("#banner img").attr("src").split("img/")[0]+"img/"+arr[index]+".jpg");
    
}