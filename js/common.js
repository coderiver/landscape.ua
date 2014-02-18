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

        var slideshows = $(this).find('.js-cycle').on('gallery__next gallery__prev', function(e, opts) {
            slideshows.not(this).cycle('goto', opts.currSlide);
        });

        slider_2.find(".cycle-slide").click(function(){
            var index = slider_2.data('cycle.API').getSlideIndex(this);
            slideshows.cycle('goto', index);
        });
    });

	// show/hide info
	$(".js-hide").click(function(){
		$(this).hide();
	});

	// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.bind("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    	if ($(".js-tab-group").length) {
    		tab();
    	};

  	$(".overlay").hide();
  	$(".js-popup").hide();

  	// map popup

  	$(".js-map").bind('click', function(){
  		$(".overlay").show();
		$(".js-popup").show();
  		return false;
  	});
  	$(".overlay").bind('click', function(){
		$(".js-popup").hide();
		$(this).hide();
  	});
  	$(".js-popup-close").bind('click', function(){
		$(this).parents(".js-popup").hide();
		$(".overlay").hide();
  	});

    // window scroll
    
    $(window).scroll(function(){
        
    });

    $(document).click(function(event){

	});

});