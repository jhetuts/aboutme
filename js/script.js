$(document).ready(function(){
	var maxHeight,
		heading = 0;
	
	$('.menu-button, .menu-toc li a').click(function(){
		$('.menu-button').toggleClass('active');
		if($('.menu-button').hasClass('active')){
			$('body, html').css({
				'height': screen.height,
				'overflow': 'hidden'
			});
		} else{
			$('body, html').css({
				'height': '',
				'overflow': 'auto'
			});
		}
	});
	
	$(window).on('load resize scroll', function(){
		$('.table').css('height', screen.height);

		$(".list-items li .details").each(function(){
			if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
		$(".list-items li .details").height(maxHeight);

		$(".list-items li h4").each(function(){
			if ($(this).height() > heading) { heading = $(this).height(); }
			});
		$(".list-items li h4").height(heading);
	});
    
	$('.cover-page').hide().fadeIn().css('visibility', 'visible');

	$('.start-scroll').on('click', function(){
		$(this).siblings('.pc-frame').toggleClass('off');
		$(this).hide();
	});

});

