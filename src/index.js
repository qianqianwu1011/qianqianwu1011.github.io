

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerIntro;
var playerReel;
var playerA1;
var playerA2;
var playerA3;
function onYouTubeIframeAPIReady() {
  playerIntro = new YT.Player('intro', {
    height: '600',
    width: '900',
    videoId: '6kIB_dsN3MM',
    
  });
  playerReel = new YT.Player('reel', {
    height: '600',
    width: '900',
    videoId: 'xJEQH_Sve0I',
    
  });
  playerA1 = new YT.Player('a1', {
    height: '600',
    width: '900',
    videoId: 'gCs_o6pGJSA',
    
  });
  playerA2 = new YT.Player('a2', {
    height: '600',
    width: '900',
    videoId: 'ppgkXeKkav8',
    
  });
  playerA3 = new YT.Player('a3', {
    height: '600',
    width: '900',
    videoId: '14GVtoVtqrQ',
    
  });
  
}

$(function(){

	function showContent(selector) {
	  $('.menu-content').hide();
	  $(selector).show();
	}
	$('.menubtn').on('click', function(e) {
		var curname = $(this).attr('href').substr(1);
		$("iframe").each(function() {
			if ($(this).parent().attr('id') != curname){
        var src= $(this).attr('src');
        $(this).attr('src',src);  
      }
		});
	  showContent(e.currentTarget.hash);
	  e.preventDefault();
	}); 

	function showAnime(selector) {
		$('#animation .video').hide();
		$(selector).show();
	}
	$('.animebtn').on('click', function(e) {
		var curanime = $(this).attr('href').substr(1);
		$("iframe").each(function() { 
			if ($(this).attr('id') != curanime){
      	var src= $(this).attr('src');
      	$(this).attr('src',src);  
    	}
		});
	  showAnime(e.currentTarget.hash);
	  e.preventDefault();
	}); 
	$('#a1').show();
	$('.menu-content').hide();
});

