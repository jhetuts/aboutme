$(function(){
	var	speed = 3000,
		sliderArea = $(".sliderArea"),
		sliderBox = $(".sliderBox"),
		sliderLi = $(".sliderBox li"),
		slidesNum = $(".sliderBox li").length,
		slidesWidth = $(".sliderBox li").width(),
		fullWidth = (slidesNum) * slidesWidth,
		counter = 0, interval,
		ellipsis = $("<ul></ul");
	
	sliderBox.css('width', fullWidth);
	sliderArea.css('width', slidesWidth);
	sliderLi.css('width', sliderArea.width());
	
	
	
	for(var i = 0; i < slidesNum; i++){
		var li = $('<li></li>');
		ellipsis.addClass("ellipsis clearfix");
		ellipsis.attr("role", "menuitem");
		li.attr("data-no",i);
		ellipsis.append(li);

		if(i == 0){
			li.addClass("active");
		}
	}
	sliderArea.append(ellipsis);
	
	
	startSlider();
	
	function startSlider(){
		function resetInterval(){
			window.clearInterval(interval);
			interval = setInterval(goRight, 5000);
		}
		
		interval = setInterval(goLeft, speed);
		
		$('.controller p').on('click',function(){
			var y = $(this).attr('class');

			if(y == 'arrowRight'){
				resetInterval();
				goRight();
			}
			else{
				resetInterval();
				goLeft();
			}
		});
		
		$('.ellipsis li').click(function(){
			resetInterval();
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			slide(index, (slidesWidth*index));
			counter = index;
		});
		
		function goRight(){
			counter++;
			if(counter >= slidesNum){
				counter = 0;
				slide(counter,(slidesWidth*counter));
			}
			else {
				slide(counter,(slidesWidth*counter));
			}
		}
		function goLeft() {
			counter--;
			if(counter < 0){
				counter = slidesNum-1;
				slide(counter,(slidesWidth*counter));
			}
			else {
				slide(counter,(slidesWidth*counter));
			}
		}
		function slide(x, i){
			resetInterval();
			$('.sliderBox').animate({
				'left': '-'+i+'px'
			}, 500, 'swing');
			
			$('.ellipsis li').eq(x).addClass('active').siblings().removeClass('active');
		}
		
		$('.sliderBox').mouseenter(function(){
			window.clearInterval(interval);
		}).mouseleave(function(){
			resetInterval();
		});
		
		
	}
});

