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
            tab_link.on("click", function() {
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

  	$(".js-map").on('click', function(){
  		$(".overlay").show();
		$(".js-popup-map").show();
  		return false;
  	});
  	$(".js-popup-close").on('click', function(){
		  $(this).parents(".js-popup").hide();
		  $(".overlay").hide();
  	});

  	// body scroll-top	
	
	$(".js-scrolltop").click(function (){
	  	$('html, body').animate({
	  	 	scrollTop: $(".out").offset().top
	  	}, 500);
	})
    
	// toggle company answer

	$(".js-comm-text").hide();
	$(".js-comm-btn").removeClass('is-open');
	$(".js-comm-btn").on('click', function(){
		$(this).toggleClass('is-open');
		$(this).next().toggle();
	});

	// popup add comment
	$(".js-popup-comment").on('click', function(){
		$(".js-popup-comm").show();
		$(".overlay").show();
		return false;
	});	


  // spinner
  
  $( ".spinner" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( ".spinner-value__min input" ).val( ui.values[ 0 ] );
        $( ".spinner-value__max input" ).val( ui.values[ 1 ] );
      }
    });


    // count popup

    $(".js-count").hide();
    $(".js-thanks").hide();
    
    $(".js-count-btn").on('click', function(){
      $(".js-count").show();
      $(".overlay").show();
      return false;
    }); 
    $(".js-count-close").on('click', function(){
      $(".overlay").hide();
      $(".js-count").hide();
    });

    $(".overlay").on('click', function(){
      $(".js-popup").hide();
      $(".js-count").hide();
      $(".js-thanks").hide();
      $(".js-login").hide();
      $(".js-order").hide();
      $(".js-feedback").hide();
      $(this).hide();
    });

    $(".js-thanks-btn").on('click', function(){
      $(".js-count").hide();
      $(".js-thanks").show();
      return false;
    });

    $(".js-thanks-close").on('click', function(){
      $(".js-thanks").hide();
      $(".overlay").hide();
    });

    // login popup

    $(".js-login").hide();

    $(".js-login-btn").on('click', function(){
      $(".js-login").show();
      $(".overlay").show();
      return false;
    });

    $(".js-login-close").on('click', function(){
      $(".js-login").hide();
      $(".overlay").hide();
    });

    // popup order 

    $(".js-order").hide();

    $(".js-order-btn").on('click', function(){
      $(".js-order").show();
      $(".overlay").show();
      return false;
    });

    $(".js-order-close").on('click', function(){
      $(".js-order").hide();
      $(".overlay").hide();
    });


    // feedback popup on steps page
    $(".js-feedback").hide();

    $(".js-feedback-btn").on('click', function(){
      $(".overlay").show();
      $(".js-feedback").show();
    });
    $(".js-feedback-close").on('click', function(){
      $(".overlay").hide();
      $(".js-feedback").hide();
    });

    // rank
    
    function rank(){
        
        var sublist = $(".rank__sublist");
        var btn = $(".rank__open");
        
        sublist.hide();

        btn.on('click', function(){
            $(this).toggleClass('is-open').next().slideToggle('fast');
        });
    
    }
    if ($(".rank").length) {
      rank();
    };

    // select
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
            $(".help").on('click', function(event){
                $(".js-select-list").hide();
                event.stopPropagation();
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });
    

    // editor

    $(".editor__btn").on('click', function(){
      $(this).toggleClass('is-active');
    })


    // schedule

    function schedule(){
      
      var pause = $(".js-work-day");
      var weekend = $(".js-weekend"); 
      
      $('.schedule__day').addClass('is-disabled');
      $('.schedule__day').find(pause).attr('disabled', 'disabled');
      $('.schedule__day').find('.schedule__time').attr('disabled', 'disabled');
      $('.schedule__day').find('.break input').attr('disabled', 'disabled');
      
      $('.break').hide();
      
      pause.change(function(){
        if ($(this).is(':checked')) {
          $(this).parents('.schedule__day').find('.break').show();
        }
        else{
          $(this).parents('.schedule__day').find('.break').hide();
        }
      });
      weekend.change(function(){
        if ($(this).is(':checked')) {
          $(this).parents('.schedule__day').removeClass('is-disabled');
          $(this).parents('.schedule__day').find(pause).attr('disabled', false);
          $(this).parents('.schedule__day').find('.schedule__time').attr('disabled', false);
          $(this).parents('.schedule__day').find('.break input').attr('disabled', false);
        }
        else{
          $(this).parents('.schedule__day').addClass('is-disabled');
          $(this).parents('.schedule__day').find(pause).attr('disabled', 'disabled');
          $(this).parents('.schedule__day').find('.schedule__time').attr('disabled', 'disabled');
          $(this).parents('.schedule__day').find('.break input').attr('disabled', 'disabled');
        }
      });
    
    }
    schedule();

    // multidrop

    function multidrop(){
      var dropdown = $(".js-multidrop-dropdown");
      var drop = $(".js-multidrop");
      var preview = $(".js-multidrop-preview");
      var input = $(".js-multidrop-input");
      
      dropdown.hide();
      
      preview.on('click', function(event){
        $(this).parent().find('.js-multidrop-dropdown').slideDown('fast');
        event.stopPropagation();
      });
      
      dropdown.find('a').on('click', function(){
        var text = $(this).text();
        var val = $(this).attr('data-val');
        
        if($(this).parents('.level3')){
          var attr3 = $(this).parents('.level3').attr('data-level');
        }

        if($(this).parents('.level2')){
          var attr2 = $(this).parents('.level2').attr('data-level');
        }
        if($(this).parents('.level1')){
          var attr1 = $(this).parents('.level1').attr('data-level');
        }

        preview.text(attr1 +' > '+ attr2 +' > '+ attr3 +' > '+ text); 

        $(this).parents(drop).find(input).val(val);
        $(this).parents(drop).find(dropdown).slideUp('fast');
        return false;
      });



    }
    multidrop();
    
    

    // window scroll
    $(window).scroll(function(){
        
    });

    $(document).click(function(event){
      $(".js-multidrop-dropdown").slideUp('fast');
	});

});