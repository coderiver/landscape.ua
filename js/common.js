$(document).ready(function() {
	
	
	// dropdown
	
	$(".js-dropdown-list").hide();
	$(".js-dropdown").click(function(){
		$(this).parent().find('.js-dropdown-list').slideToggle();
	});

	// gallery
	$(".js-slider").each(function(){
        var slider_1 = $(this).find('.js-cycle-1');
        var slider_2 = $(this).find('.js-cycle-2');
        slider_1.cycle();
        slider_2.cycle();

        var slideshows = $(this).find('.js-cycle').on('cycle-next cycle-prev', function(e, opts) {
            slideshows.not(this).cycle('goto', opts.currSlide);
        });

        slider_2.find(".cycle-slide").click(function(){
            var index = slider_2.data('cycle.API').getSlideIndex(this);
            slideshows.cycle('goto', index);
        });
    });



    // window scroll
    
    $(window).scroll(function(){
        
    });

    $(document).click(function(event){
		
	});

});