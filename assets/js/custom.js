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
var cols = ['#fffff','#ededed','#ececec'];
var stars = 250;

for (var i = 0; i <= stars; i++) {

	var size = Math.random()*3;
  var color = cols[parseInt(Math.random()*4)];

	$('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
};

setTimeout(function(){ 
	$('#starsBox span').each(function(){  
 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
  });
}, 1);

setInterval(function(){ 
	$('#starsBox span').each(function(){  	
 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
  });
}, 100000); 