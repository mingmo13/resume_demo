;$(function(){
	'use strict';

	var $sidebar=$('#sidebar'),
		$mask=$('.mask'),
		$sidebar_trigger=$('#sidebar_trigger'),
		$backButton=$('.backToTop');

	
	$sidebar_trigger.on('click',showSidebar);
	$mask.on('click',hideSidebar);
	$backButton.on('click',backToTop);

	$(window).on('scroll',function(){
		if ($(window).scrollTop()>$(window).height()) 
		{
			$backButton.fadeIn();
		}
		else{
			$backButton.fadeOut();
		}
	})

	$(window).trigger('scroll');

	function showSidebar() {
		
			$mask.fadeIn();
			$sidebar.css('right',0);
	}
	function hideSidebar() {
		
			$mask.fadeOut();
			$sidebar.css('right',-$sidebar.width());
	}
	function backToTop() {
		
			$('html,body').animate({
				scrollTop:0
			},1000);
	}
})