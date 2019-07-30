$(document).ready(()=>{
	

	$('.moon').on('click',function(){
		$(this).addClass('moon_down');
		$('.sky').addClass('sky_light');
		$('.sun').addClass('sun_up');
		$('.ground').addClass('ground_day');
		$('.window').addClass('window_day').removeClass('window_light_off');
		$('.building').addClass('building_day');
	})

	$('.sun').on('click',function(){
		$('.moon').removeClass('moon_down');
		$('.sky').removeClass('sky_light');
		$(this).removeClass('sun_up');
		$('.ground').removeClass('ground_day');
		$('.window').removeClass('window_day');
		$('.building').removeClass('building_day');
	})

})