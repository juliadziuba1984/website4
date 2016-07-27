/*-------------OLD Browser Panel---------------------------------------*/	
	
	/*Get browser version*/
	function get_browser(){
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
		if(/trident/i.test(M[1])){
			tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
			return 'IE '+(tem[1]||'');
			}   
		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR\/(\d+)/)
			if(tem!=null)   {return 'Opera '+tem[1];}
			}   
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
		return M[0];
    }

	function get_browser_version(){
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];                                                                                                                         
		if(/trident/i.test(M[1])){
			tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE '+(tem[1]||'');
			}
		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR\/(\d+)/)
			if(tem!=null)   {return 'Opera '+tem[1];}
			}   
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
		return M[1];
    }
	
	
	var browser=get_browser();
	var browser_version=get_browser_version();
	
	
	
	
/*-------------End OLD Browser Panel---------------------------------------*/		


function InitPlayer(){
	$('.js_videoplayer').each(function() {
			var the_player_wrapper = $(this);
			var the_player = $('video', the_player_wrapper);
			
	
			
			the_player.mediaelementplayer({
				alwaysShowControls: true,
				startVolume: 1,
				features: ['playpause','progress', 'duration'/*,'volume'*/,'fullscreen'],
				success: function(mediaElement, domObject) {
				
					
					$('.play').on('click', function() {
						 mediaElement.play();
					   });
				}
			});
		});
	$('.mejs-time-current').css('width', '0px');
	
}

/*-------------------popup init-------------------*/
function InitPopup(popup){
	popup = $(popup);
	var cls = popup.attr('data-popup');
	$('.custom-popup.'+cls).prev('.custom-overlay').fadeIn('100');	
	
	$('.custom-popup.'+cls).fadeIn('300');
	
	
	if(cls == 'js_video_popup') {
		var video_target = popup.attr('href');
		$('.custom-popup.'+cls).find('video').attr('src', video_target);
		$('.page').addClass('blur');
		InitPlayer();
	}
	
	if(cls == 'js_video_youtube_popup') {
		var video_target = popup.attr('href');
		$('.custom-popup.'+cls).find('source').attr('src', video_target);
		$('.page').addClass('blur');
		InitPlayer();
	}
	
	
	if(cls == 'js_photo_gallery_popup') {
		$('.page').addClass('blur');
	}
	
	
	

	
	
}
/*-------------------end popup init-------------------*/


/*----------------------------------ALIGN POPUPS-------------------------*/
function AlignPopup(){
	$('.custom-popup').each(function(){
		if($(this).outerWidth() > $(window).width()-80 && $(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else if($(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': ($(window).width()-$(this).outerWidth())/ 2 + 'px'
			});
		}
		
		else if($(this).outerWidth() > $(window).width()-80) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else {
			$(this).css('top',($(window).height()-$(this).outerHeight())/ 2 + 'px');
			$(this).css('left',($(window).width()-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'fixed');	
		}
	});
	
	
	
	
	
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/Blackberry/i) )
    {
	$('.custom-popup').addClass('mobilepopup');
		
	$('.custom-popup').each(function(){
		if($(this).outerWidth() > $(window).width() && $(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '10px'
			});
		}
		
		else if($(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': ($(window).width()-$(this).outerWidth())/ 2 + 'px'
			});
		}
		
		else if($(this).outerWidth() > $(window).width()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '10px'
			});
		}
		
		else {
			$(this).css('top',($(window).height()-$(this).outerHeight())/ 2 + 'px');
			$(this).css('left',($(window).width()-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'absolute');	
		}
	});
	}
}
/*----------------------------------END ALIGN POPUPS-------------------------*/





/*main item block price for one*/
function setMainItemPrice(){
	var mi_total_price_for_one = $('.js_mi_total_price_for_one');
	var mi_get_price_for_one = $('.row.active .price_block').html();
	mi_total_price_for_one.html(mi_get_price_for_one);	
}
/*end main item block price*/


/*items blocks price for one*/
function setItemPrice(){
	$('.js_i_total_price_for_one').each(function(){
		var i_total_price_for_one = $(this);
		var i_get_price_for_one = $(this).closest('.js_item_block').find('.row.active .price_block').html();
		i_total_price_for_one.html(i_get_price_for_one);	
	})
}
/*end items blocks price*/


/*count price on item page*/
function FinalMainItemPrice(){
	$('.js_mi_total_price, .js_i_total_price').each(function(){
		var amount = $(this).closest('.js_item_block').find('.js_counter_input').val().replace(/\s/g, '');	
		var price = $(this).closest('.js_item_block').find('.row.active .hidden_price').html();
		price = price.replace(" ", "" );
		price =  parseFloat(price);
		amount = parseInt(amount);
		var final = (price*amount);
		final = number_format(final, 2, '.', ' ');
		$(this).html(final);
		changePriceView();
	});	
}
/*end count price on item page*/

/*count cart price for item*/
function FinalCartItemPrice(){
	$('.js_item_block .js_cart_item_total_price').each(function(){
		var amount = $(this).closest('.js_item_block').find('.js_counter_input').val().replace(/\s/g, '');	
		var price = $(this).closest('.js_item_block').find('.hidden_price').html();
		price = price.replace(" ", "" );
		price =  parseFloat(price);
		amount = parseInt(amount);
		var final = (price*amount);
		final = number_format(final, 2, '.', ' ');
		$(this).html(final);
		changePriceView();
		var hidden_total_item_price = $(this).closest('.js_item_block').find('.js_hidden_total_item_price');
		hidden_total_item_price.html(final);
	});
	showFinalCartResult();
	
	
	
	
	
	$('.js_item_not_available_block .js_cart_item_total_price').each(function(){
		var amount = $(this).closest('.js_item_not_available_block').find('.js_counter_input').val().replace(/\s/g, '');	
		var price = $(this).closest('.js_item_not_available_block').find('.hidden_price').html();
		price = price.replace(" ", "" );
		price =  parseFloat(price);
		amount = parseInt(amount);
		var final = (price*amount);
		final = number_format(final, 2, '.', ' ');
		$(this).html(final);
		changePriceView();
		var hidden_total_item_price = $(this).closest('.js_item_not_available_block').find('.js_hidden_total_item_price');
		hidden_total_item_price.html(final);
	});
}
/*end count cart price for item*/

/*Final cart price*/
function showFinalCartResult(){
	var c=0;
	$('.cart_block_holder .js_item_block').each(function(){							   
		var total_block = $(this);
		var totals = $('.hidden_total_item_price', total_block).html();
		totals = totals.replace(" ", "" );
		totals=parseFloat(totals);
		c += totals;
	})
	$('.js_cart_final_price').html(c.toFixed(2));
	changePriceView();
}
/*end Final cart price*/


/*(add green bg to active row Price/Amount in Item) */
function ItemCounterAmount(){
	$('.js_item_block').each(function(){
			var parent = $(this);
			$('.js_counter_input', parent).keyup(function(){
				InfoTextTooltip ();
				if($(this).val().replace(/\s/g, '')>=1 || $(this).val()<=1){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=1]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
				if($(this).val().replace(/\s/g, '')>=5){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=5]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}
				if($(this).val().replace(/\s/g, '')>=10){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=10]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
				if($(this).val().replace(/\s/g, '')>=20){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=20]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
				
				
				
			})									  						   
	})
}
/*(add green bg to active row Price/Amount in Item) */


function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 2;
    }
    if( dec_point == undefined ){
        dec_point = ",";
    }
    if( thousands_sep == undefined ){
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}


function InfoTextTooltip (){
	var row = $('.add_to_cart_block_1  .row').length;
	if($('.amount_price_block .rows .row.active').index()>=3){
		var info_text = $('.amount_price_block .rows  .row:first-child').find('.row_left .inner').html();
		var info_text_2 = $('.amount_price_block .rows  .row:first-child').find('.row_right .inner').html();
		$('.item_counter .info_text').html(info_text+ 'øò öåíà  ' +info_text_2);
	}
	else{
		var info_text = $('.amount_price_block .row.active').next().find('.row_left .inner').html();
		var info_text_2 = $('.amount_price_block .row.active').next().find('.row_right .inner').html();
		$('.item_counter .info_text').html(info_text+ 'øò öåíà   ' +info_text_2);
	}
}

function InfoTextTooltip_2 (){
	$('.js_item_block').each(function(){
		var parent = $(this);
		var row = parent.find('.amount_price_block .rows .row').length;
		//var row_first = parent.find('.amount_price_block .rows  .row:first-child');
		var row_active = parent.find('.amount_price_block .rows .row.active');
		if(row_active.index()>=3){
			var info_text = parent.find('.amount_price_block .rows  .row:first-child').find('.row_left .inner').html();
			var info_text_2 = parent.find('.amount_price_block .rows  .row:first-child').find('.row_right .inner').html();
			parent.find('.item_counter .info_text').html(info_text+ 'øò öåíà  ' +info_text_2);
		}
		
		else{
			var info_text = parent.find('.amount_price_block .row.active').next().find('.row_left .inner').html();
			var info_text_2 = parent.find('.amount_price_block .row.active').next().find('.row_right .inner').html();
			parent.find('.item_counter .info_text').html(info_text+ 'øò öåíà  ' +info_text_2);
		}
	})
}

/*---------------------ITEM COUNTER---------------------*/
function ItemCounter(){ 
	$('.js_item_block .js_counter_input').each(function(){
		var val = $(this).val().replace(/\s/g, '');		
		var formatted_val = number_format(val, 0, '.', ' ');
		$(this).val(formatted_val);	
	})
	
	$('.js_item_not_available_block .js_counter_input').each(function(){
		var val = $(this).val().replace(/\s/g, '');		
		var formatted_val = number_format(val, 0, '.', ' ');
		$(this).val(formatted_val);	
	})
	$('.js_item_not_available_block .js_counter').each(function(){
			var the_counter = $(this);
			var parent = $(this).closest('.js_item_not_available_block');
			
			$('.js_btn_counter_next', the_counter).click(function(e){
				e.preventDefault();
				$count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
				$count2 = parseInt($count)+1;
				$count2 = number_format($count2, 0, '.', ' ');
				$('.js_counter_input', the_counter).val($count2);
				var input_value = $('.js_counter_input', parent).val().replace(/\s/g, '');
				FinalCartItemPrice();
				
				
				
			})
			$('.js_btn_counter_prev', the_counter).click(function(e){
				e.preventDefault();
				if($('.js_counter_input').attr('data-min-value')){
					var value = $('.js_counter_input').attr('data-min-value');
					$count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
					$count2 = parseInt($count)-1;
					if($count2<value) $count2 = value;
					$count2 = number_format($count2, 0, '.', ' ');
					$('.js_counter_input' ,the_counter).val($count2);
				}
				FinalCartItemPrice();
			})
			$('.js_counter_input', the_counter).blur(function(){
				if($('.js_counter_input').attr('data-min-value')){
					var value = $('.js_counter_input').attr('data-min-value');
					$count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
					$count2 = parseInt($count);
					if($count2<value || $('.js_counter_input', the_counter).val().replace(/\s/g, '')=='') {
						$count2 = value;
						$('.js_counter_input' ,the_counter).val($count2);

					}
				}
				else {
					if($('.js_counter_input', the_counter).val().replace(/\s/g, '')==''){
					
						$('.js_counter_input' ,the_counter).val(1);
					}
				}
				$count2 = number_format($count2, 0, '.', ' ');
				$('.js_counter_input' ,the_counter).val($count2);
				FinalCartItemPrice();
			})	
	})
	
	
	
	
	

	$('.js_item_block .js_counter').each(function(){
			var the_counter = $(this);
			var parent = $(this).closest('.js_item_block');
			
			$('.js_btn_counter_next', the_counter).click(function(e){
				e.preventDefault();
				
				
				var step = $count = $('.js_counter_input', the_counter).attr('data-step');
				//alert(step);
				$count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
				if (step){
					$count2 = parseInt($count)+parseInt(step);
				}
				else{
					$count2 = parseInt($count)+1;
				}
				$count2 = number_format($count2, 0, '.', ' ');
				
				
				InfoTextTooltip ();
				InfoTextTooltip_2();
				
				
				
				$('.js_counter_input', the_counter).val($count2);
				var input_value = $('.js_counter_input', parent).val().replace(/\s/g, '');
				if(input_value>=1 && input_value<=4){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=1]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}
				if(input_value>=5 && input_value<=9){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=5]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}
				if(input_value>=10  && input_value<=19){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=10]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
				if(input_value>=20){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=20]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
			})
			
			$('.js_btn_counter_prev', the_counter).click(function(e){
																  
				e.preventDefault();

				InfoTextTooltip ();
				InfoTextTooltip_2();
				
				if($('.js_counter_input', the_counter).attr('data-min-value')){
					var value = $('.js_counter_input', the_counter).attr('data-min-value');
					var count2;
					var step  = $('.js_counter_input', the_counter).attr('data-step');
					var count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
					if (step){
						count2 = parseInt(count)-parseInt(step);
					}
					else{
						count2 = parseInt(count)-1;
					}
					count2 = number_format(count2, 0, '.', ' ');
					if(count2<parseInt(value)) count2 = value;
					count2 = number_format(count2, 0, '.', ' ');
					$('.js_counter_input' ,the_counter).val(count2);
				}
				else {
					count = $('.js_counter_input', the_counter).val();
					count2 = parseInt($count)-1;
					if(count2<1) count2 = 1;
					$('.js_counter_input' ,the_counter).val(count2);
				}
				
				var input_value = $('.js_counter_input', parent).val().replace(/\s/g, '');
				if(input_value>=1 && input_value<=4){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=1]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}
				if(input_value>=5 && input_value<=9){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=5]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
					FinalCartItemPrice();
				}
				if(input_value>=10  && input_value<=19){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=10]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
				if(input_value>=20){
					$('.js_amount_price .row', parent).removeClass('active');
					$('.js_amount_price .row[data-amount=20]', parent).addClass('active');
					setMainItemPrice();
					setItemPrice();
					FinalMainItemPrice();
					FinalCartItemPrice();
				}	
			})	
			

			$('.js_counter_input', the_counter).blur(function(){
				
				
				
				if($('.js_counter_input').attr('data-min-value')){
					var value = $('.js_counter_input').attr('data-min-value');
					$count = $('.js_counter_input', the_counter).val().replace(/\s/g, '');
					$count2 = parseInt($count);
					if($count2<value || $('.js_counter_input', the_counter).val().replace(/\s/g, '')=='') {
						$count2 = value;
						$('.js_counter_input' ,the_counter).val($count2);

					}
				}
				else {
					if($('.js_counter_input', the_counter).val().replace(/\s/g, '')==''){
					
						$('.js_counter_input' ,the_counter).val(1);
					}
				}
				
				var step = $('.js_counter_input', the_counter).attr('data-step');
				if(step){
					if($count2 % step !=0){
					do{
						$count2=$count2-1;
					}while ($count2 % step !=0)
					}
				}
				
				$count2 = number_format($count2, 0, '.', ' ');
				$('.js_counter_input' ,the_counter).val($count2);
				ItemCounterAmount();
				setMainItemPrice();
				setItemPrice();
				FinalMainItemPrice();
				FinalCartItemPrice();
			})	
			
			
			
			
			
	}); 
}
/*----------------END ITEM COUNTER-----------------*/






/*-------------------news blocks near to each other-------------------*/
function alignBlocks(){
	var $container = $('.js_align_blocks');
	$container.masonry({
	  itemSelector: '.block'
	});
}
/*-------------------End news blocks near to each other-------------------*/


function posHoverBlockInSlider(){
	$('.js_items_slider').each(function(){
		var index3 = $(this).find('.swiper-slide-active').index()+4;
		var index4 = $(this).find('.swiper-slide-active').index()+5;
		
		$(this).find('.swiper-slide:nth-child('+index3+')').addClass('left_pos_hover');
		$(this).find('.swiper-slide:nth-child('+index4+')').addClass('left_pos_hover');						
	
		$('.js_items_slider .js_swiper_next, .js_items_slider .js_swiper_prev').click(function(){
			var index3 = $(this).parent().find('.swiper-slide-active').index()+4;
			var index4 = $(this).parent().find('.swiper-slide-active').index()+5;
			//alert(index);
			$(this).parent().find('.swiper-slide').removeClass('left_pos_hover');
			$(this).parent().find('.swiper-slide:nth-child('+index3+')').addClass('left_pos_hover');
			$(this).parent().find('.swiper-slide:nth-child('+index4+')').addClass('left_pos_hover');
		 })
	})
}

/*-------------------Tabs-------------------*/
function initTabs() {
    var isAnimating = false;
    $('[data-tab]').click(function(e) {
         e.preventDefault();
		 
		 if($(this).hasClass('active')){
			 
		}
		else{
        if(!isAnimating) {
            var parent = $(this).parent().parent();
            var cls = $(this).attr('data-tab');
			var cls2 = $(this).attr('data-table-tab');
			//alert(cls2);
            isAnimating = true;
            $('[data-tab]', parent).removeClass('active');
            $(this, parent).addClass('active');

            if($('.hidden_content').hasClass('active')){
                $('.hidden_content.active', parent).fadeOut(300, function(){
                    $('.hidden_content.active', parent).removeClass('active');
                    $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                        isAnimating = false;

						var items_slider2 = new Swiper('.js_items_slider2 .swiper-container', {
							slidesPerView: '5',
							spaceBetween: 25,
							loop:false,
							nextButton: '.js_items_slider2 .js_swiper_next',
							prevButton: '.js_items_slider2 .js_swiper_prev',
							mousewheelControl: false,
							simulateTouch: false
						});
						posHoverBlockInSlider();
                    });  
                    $('.hidden_content'+'#'+cls, parent).addClass('active');
                })
            }
            else {
                $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                    isAnimating = false;
                }); 
                $('.hidden_content'+'#'+cls, parent).addClass('active');
            }
			
			
			
			
			
			if($('.hidden_table_content').hasClass('active')){
                $('.hidden_table_content.active').fadeOut(300, function(){
                    $('.hidden_table_content.active').removeClass('active');
                    $('.hidden_table_content'+'#'+cls2).fadeIn(300, function() {
                        isAnimating = false;
                    });  
                    $('.hidden_table_content'+'#'+cls2).addClass('active');
					$('.jspContainer').css('height', $('.compare_items').innerHeight()+$('.tables_from_tabs').innerHeight()+'px');
                })
            }
            else {
                $('.hidden_table_content'+'#'+cls2).fadeIn(300, function() {
                    isAnimating = false;
                }); 
                $('.hidden_table_content'+'#'+cls2).addClass('active');
            }
			
			
			
        }
		}
    });
	$('.hidden_content.active').fadeIn();	
	$('.hidden_table_content.active').fadeIn();
}
/*-------------------end Tabs-------------------*/




function initFilterTabs() {
    var isAnimating = false;
    $('[data-filter]').click(function(e) {
         e.preventDefault();
		 
		 if($(this).hasClass('active')){
			 
		}
		else{
        if(!isAnimating) {
            var cls = $(this).attr('data-filter');
            isAnimating = true;
            $('[data-filter]').removeClass('active');
            $(this, parent).addClass('active');

            if($('.filter_content.hidden_content').hasClass('active')){
                $('.filter_content.hidden_content.active').fadeOut(300, function(){
                    $('.filter_content.hidden_content.active').removeClass('active');
                    $('.filter_content.hidden_content'+'#'+cls).fadeIn(300, function() {
                        isAnimating = false;
						
                    });  
                    $('.filter_content.hidden_content'+'#'+cls).addClass('active');
                })
            }
            else {
                $('.filter_content.hidden_content'+'#'+cls).fadeIn(300, function() {
                    isAnimating = false;
                }); 
                $('.filter_content.hidden_content'+'#'+cls).addClass('active');
            }

        }
		}
    });
	$('.filter_content.hidden_content.active').fadeIn();	
}
/*-------------------end Tabs-------------------*/



/*-----------------CLEAR INPUT VALUE WHEN CLICK-----------------------*/
function doClear(theText) { 
	if (theText.value == theText.defaultValue) { theText.value = "" } 
}
function doDefault(theText) { 
	if (theText.value == "") { theText.value = theText.defaultValue } 
}
/*-------------------END CLEAR INPUT VALUE WHEN CLICK-----------------*/



/*Bookmarks panel*/
function init_small_side_panel() {
	var max_top = 132;
	var min_top = 132;
	
	var max_top_LK = 97;
	var min_top_LK = 97;
	
	var the_block = $('.bookmarks_wrapper');
	$(window).scroll(function() {
		var scrolled_top = $(window).scrollTop();
		var new_top = scrolled_top;
		
		if(the_block.hasClass('LK_bookmarks_wrapper')){
			if(new_top <= min_top_LK) {
				new_top = min_top_LK;
				the_block.css('top', new_top + 'px');
				the_block.css('position', 'absolute');
				the_block.css('right', '0px');
			}
			
			else{
				the_block.css('top', '0px');
				the_block.css('position', 'fixed');
				if($(window).width()<1280){
					the_block.css('right', '-17px');
				}
			}
		}
		else{
			if(new_top <= min_top) {
				new_top = min_top;
				the_block.css('top', new_top + 'px');
				the_block.css('position', 'absolute');
				the_block.css('right', '0px');
			}
			else{
				the_block.css('top', '0px');
				the_block.css('position', 'fixed');
				if($(window).width()<1280){
					the_block.css('right', '-17px');
				}
			}
		}
	});
}
/*end Bookmarks panel*/








function ChooseFile(){
	if($('.js_file_input').val()!=""){
		$('.js_file_value').html($('.js_file_input').val());
		$('.js_remove_file').css('display', 'block');
		$('.file_name_holder').css('display', 'inline-block');
	}
}




/*make cents in price upper*/
function changePriceView(){
	$.each($('.js_change_price'), function(){
	var price = $(this).html();
	$(this).html(price.replace(/(\D*)(\d+)([\.\,])(\d*)/,'<span class=js_"price_rub">$1</span><span class="js_price_rub">$2</span><span class="js_price_cent">$4</span><span style="width:15px; display:inline-block;"></span>'));
	});	
}
/*make cents in price upper*/


$( window ).resize(function() {
	AlignPopup();		
	SetCatalogMenuHeight();

});	

$(window).load( function() {
	alignBlocks();
});

$(window).scroll(function(){

	/* bottom button position*/
	var page_height = $('.page').height()-$('.footer').height()-$(window).height();
	var scrollTop = $(window).scrollTop();
	if(scrollTop>=page_height){
		$('.recently_viewed_block_holder').addClass('stick_to_footer');
		$('.stick_to_footer').css('bottom', $('.footer').height()+'px');
	}	
	else {
		$('.recently_viewed_block_holder').removeClass('stick_to_footer');
		$('.recently_viewed_block_holder').css('bottom', '0');
		}
	/* end bottom button position*/	


	var scrolled_top = $(window).scrollTop();
	if(scrolled_top>128) {
		$('.header_bottom_block').addClass('fixed');
		$('.header_top_block').css('margin-bottom', "65px");
		$('.header_main_page_top_block').css('margin-bottom', "49px");
	}
	else {
		$('.header_bottom_block').removeClass('fixed');
		$('.header_top_block').css('margin-bottom', "0px");
	}
	
	
	if(scrolled_top>352) {
		$('.filter_menu_holder').addClass('fixed');
		$('.search_input_holder').css('margin-bottom', "108px");
	}
	else {
		$('.filter_menu_holder').removeClass('fixed');
		$('.search_input_holder').css('margin-bottom', "0px");
	}
	
	
	var height2 = $('.page').height()-$('.footer').height()-$('.cart_total_block').height()-350;
	if(scrolled_top>height2) {
		$('.cart_headings_inner_holder').fadeOut();
	}
	else {
		$('.cart_headings_inner_holder').fadeIn();
	}
	
	
	if(scrolled_top>328) {
		$('.cart_headings_inner_holder').addClass('fixed');
	}

	else {
		$('.cart_headings_inner_holder').removeClass('fixed');
		$('.cart_headings_inner_holder').fadeIn();
	}
	
	
	

	if($('.cart_headings_inner_holder').hasClass('LK_cart_headings_inner_holder')){
		if(scrolled_top>234) {
			$('.cart_headings_inner_holder').addClass('fixed');
		}
		else {
			$('.cart_headings_inner_holder').removeClass('fixed');
		}
	}
	

	if($('.header_bottom_block').hasClass('LK_header_bottom_block')){
		if(scrolled_top>95) {
			$('.header_bottom_block').addClass('fixed');
			$('.header_LK_top_block').css('margin-bottom', "50px");
		}
		else {
			$('.header_bottom_block').removeClass('fixed');
			$('.header_LK_top_block').css('margin-bottom', "0px");
		}
	}
	
	if($('.page').hasClass('print_page')){
		$('.header_LK_top_block').css('margin-bottom', "0px");
		$('.header_top_block').css('margin-bottom', "0px");
		
	}
	

	if(scrollTop>400){
		$('.btn_top').addClass('active');
	}
	else{
		$('.btn_top').removeClass('active');
	}
	
})


/*item catalog page filter*/
function catalogCheckFilter(){
	$('.catalog_filter_items_holder .block').each(function(){
		var parent = $(this);
		
		$('input[type=checkbox]', parent).each(function(){
		 var legchecked = $('input[type=checkbox]:checked', parent).length;
   		 if (legchecked)
		 { 
			 var id = $('input[type=checkbox]', parent).attr('data-remove-id');
			 $('.btn_remove#'+id).addClass('active');
		 }
		 else{
			$('.btn_remove', parent).removeClass('active');
		 }
		});
	})
}
/*item catalog page filter*/



/*choose product page filter*/
function ChooseProductCheckFilter(){
	$('.js_choose_products_block_filter').each(function(){
		var parent = $(this);
		var subtitle = $(this).find('.subtitle');
		
		$('input[type=checkbox]', parent).each(function(){
		 var legchecked = $('input[type=checkbox]:checked', parent).length;
   		 if (legchecked)
		 { 
			 var id = $('input[type=checkbox]', parent).attr('data-remove-id');
			 $('.btn_remove#'+id).addClass('active');
			 
			var text_id = $('.js_all', parent).attr('id');
			var subtitle_text = "";
			 
			 $('input[type=checkbox]:checked', parent).each(function(){
				if($(this).attr('data-id')==text_id){
					subtitle_text+=" "+$(this).parent().find('.label-text').html()+"<span class='comma'>,</span>";	
				}
			})
			 
			subtitle.html(subtitle_text);
		 }
		 else{
			$('.btn_remove', parent).removeClass('active');
			subtitle.html("");
		 }
		});
	})
}
/*end choose product page filter*/




/*registration page checkboxes functions*/
function RegistrationActivateRadio (){
	var represent_checkbox = $('.js_represent');
	var isCheked = represent_checkbox.prop('checked');	
	if(isCheked==true){
		represent_checkbox.closest(".represent_block").find('input[type=radio]').removeAttr( "disabled" );
	}	
	else if (isCheked==false) {
		represent_checkbox.closest(".represent_block").find('input[type=radio]').attr('disabled',true);
		represent_checkbox.closest(".represent_block").find('input[type=radio]').attr('checked',false);
		$('.registration_bottom_block').slideUp();
	}
}


function RegistrationShowAdresses (){
	var radiochecked = $('.represent_block  input[type=radio]:checked').length;
   		if (radiochecked){
			$('.registration_bottom_block').slideDown();
		}
		else{
			$('.registration_bottom_block').slideUp();
		}
}





function showDeliveryAddress(){
	var delivery_checkbox = $('.js_fill_delivery_address');
	var isCheked = delivery_checkbox.prop('checked');	
	if(isCheked==true){
		$('.register_delivery_block').slideDown();
	}	
	else if (isCheked==false) {
		$('.register_delivery_block').slideUp();
		$('.register_delivery_block input').val("");
		$('.js_delivery_street option').eq(0).prop('selected', true);
			$('.js_delivery_street li').removeClass('sel selected');
			$('.js_delivery_street li').eq(0).addClass('sel selected');
			
			$('.js_delivery_region option').eq(0).prop('selected', true);
			$('.js_delivery_region li').removeClass('sel selected');
			$('.js_delivery_region li').eq(0).addClass('sel selected');
			
			$('.js_delivery_city option').eq(0).prop('selected', true);
			$('.js_delivery_city li').removeClass('sel selected');
			$('.js_delivery_city li').eq(0).addClass('sel selected');
			
			$('.js_delivery_street .jq-selectbox__select-text').html($('.js_delivery_street option:selected').html());
			$('.js_delivery_region .jq-selectbox__select-text').html($('.js_delivery_region option:selected').html());
			$('.js_delivery_city .jq-selectbox__select-text').html($('.js_delivery_city option:selected').html());
			
			$('.js_copy_actual_address').prop('checked', false);
	}
}

function CopyLegalAddress(){
		var copy_legal_address_checkbox = $('.js_copy_legal_address');
		var isCheked = copy_legal_address_checkbox.prop('checked');	
		if(isCheked==true){
			$('.js_actual_index_val').val($('.js_legal_index_val').val());
			$('.js_actual_house_val').val($('.js_legal_house_val').val());
			$('.js_actual_additional_val').val($('.js_legal_additional_val').val());
			
			var city_selected_index = $('.js_legal_city option:selected').index();
			$('.js_actual_city option').eq(city_selected_index).prop('selected', true);
			$('.js_actual_city li').removeClass('sel selected');
			$('.js_actual_city li').eq(city_selected_index).addClass('sel selected');
			$('.js_actual_city .jq-selectbox__select-text').html($('.js_actual_city option:selected').html());
			
			var regionselected_index = $('.js_legal_region option:selected').index();
			$('.js_actual_region option').eq(regionselected_index).prop('selected', true);
			$('.js_actual_region li').removeClass('sel selected');
			$('.js_actual_region li').eq(regionselected_index).addClass('sel selected');
			$('.js_actual_region .jq-selectbox__select-text').html($('.js_actual_region option:selected').html());
			
			var street_selected_index = $('.js_legal_street option:selected').index();
			$('.js_actual_street option').eq(street_selected_index).prop('selected', true);
			$('.js_actual_street li').removeClass('sel selected');
			$('.js_actual_street li').eq(street_selected_index).addClass('sel selected');
			$('.js_actual_street .jq-selectbox__select-text').html($('.js_actual_street option:selected').html());
		}	
		else if (isCheked==false) {
			$('.js_actual_index_val').val("");
			$('.js_actual_house_val').val("");
			$('.js_actual_additional_val').val("");
	
			$('.js_actual_street option').eq(0).prop('selected', true);
			$('.js_actual_street li').removeClass('sel selected');
			$('.js_actual_street li').eq(0).addClass('sel selected');
			
			$('.js_actual_region option').eq(0).prop('selected', true);
			$('.js_actual_region li').removeClass('sel selected');
			$('.js_actual_region li').eq(0).addClass('sel selected');
			
			$('.js_actual_city option').eq(0).prop('selected', true);
			$('.js_actual_city li').removeClass('sel selected');
			$('.js_actual_city li').eq(0).addClass('sel selected');
			
			$('.js_actual_street .jq-selectbox__select-text').html($('.js_actual_street option:selected').html());
			$('.js_actual_region .jq-selectbox__select-text').html($('.js_actual_region option:selected').html());
			$('.js_actual_city .jq-selectbox__select-text').html($('.js_actual_city option:selected').html());
		}
}



function CopyActualAddress(){
	var copy_actual_address_checkbox = $('.js_copy_actual_address');
	var isCheked = copy_actual_address_checkbox.prop('checked');	
		if(isCheked==true){
			$('.js_delivery_index_val').val($('.js_actual_index_val').val());
			$('.js_delivery_house_val').val($('.js_actual_house_val').val());
			$('.js_delivery_additional_val').val($('.js_actual_additional_val').val());
			
			var city_selected_index = $('.js_actual_city option:selected').index();
			$('.js_delivery_city option').eq(city_selected_index).prop('selected', true);
			$('.js_delivery_city li').removeClass('sel selected');
			$('.js_delivery_city li').eq(city_selected_index).addClass('sel selected');
			$('.js_delivery_city .jq-selectbox__select-text').html($('.js_actual_city option:selected').html());
			
			var regionselected_index = $('.jslegal_region option:selected').index();
			$('.js_delivery_region option').eq(regionselected_index).prop('selected', true);
			$('.js_delivery_region li').removeClass('sel selected');
			$('.js_delivery_region li').eq(regionselected_index).addClass('sel selected');
			$('.js_delivery_region .jq-selectbox__select-text').html($('.js_actual_region option:selected').html());
			
			var street_selected_index = $('.js_actual_street option:selected').index();
			$('.js_delivery_street option').eq(street_selected_index).prop('selected', true);
			$('.js_delivery_street li').removeClass('sel selected');
			$('.js_delivery_street li').eq(street_selected_index).addClass('sel selected');
			$('.js_delivery_street .jq-selectbox__select-text').html($('.js_actual_street option:selected').html());
		}	
		else if (isCheked==false) {
			$('.js_delivery_index_val').val("");
			$('.js_delivery_house_val').val("");
			$('.js_delivery_additional_val').val("");
			
			$('.js_delivery_street option').eq(0).prop('selected', true);
			$('.js_delivery_street li').removeClass('sel selected');
			$('.js_delivery_street li').eq(0).addClass('sel selected');
			
			$('.js_delivery_region option').eq(0).prop('selected', true);
			$('.js_delivery_region li').removeClass('sel selected');
			$('.js_delivery_region li').eq(0).addClass('sel selected');
			
			$('.js_delivery_city option').eq(0).prop('selected', true);
			$('.js_delivery_city li').removeClass('sel selected');
			$('.js_delivery_city li').eq(0).addClass('sel selected');
			
			$('.js_delivery_street .jq-selectbox__select-text').html($('.js_delivery_street option:selected').html());
			$('.js_delivery_region .jq-selectbox__select-text').html($('.js_delivery_region option:selected').html());
			$('.js_delivery_city .jq-selectbox__select-text').html($('.js_delivery_city option:selected').html());
		}
	
	}
	
	
	
	function CopyLegalAddressLK(){
		var copy_legal_address_checkbox = $('.js_copy_legal_addressLK');
		copy_legal_address_checkbox.each(function(){
		var parent=	$(this).closest('.edit_payers_block')					  
		
		var isCheked = $(this).prop('checked');	
		if(isCheked==true){
			$('.js_actual_index_val', parent).val($('.js_legal_index_val', parent).val());
			$('.js_actual_house_val', parent).val($('.js_legal_house_val', parent).val());
			$('.js_actual_additional_val', parent).val($('.js_legal_additional_val', parent).val());
			
			var city_selected_index = $('.js_legal_city option:selected', parent).index();
			$('.js_actual_city option', parent).eq(city_selected_index).prop('selected', true);
			$('.js_actual_city li', parent).removeClass('sel selected');
			$('.js_actual_city li', parent).eq(city_selected_index).addClass('sel selected');
			$('.js_actual_city .jq-selectbox__select-text', parent).html($('.js_actual_city option:selected', parent).html());
			
			var regionselected_index = $('.js_legal_region option:selected', parent).index();
			$('.js_actual_region option', parent).eq(regionselected_index).prop('selected', true);
			$('.js_actual_region li', parent).removeClass('sel selected');
			$('.js_actual_region li', parent).eq(regionselected_index).addClass('sel selected');
			$('.js_actual_region .jq-selectbox__select-text', parent).html($('.js_actual_region option:selected', parent).html());
			
			var street_selected_index = $('.js_legal_street option:selected', parent).index();
			$('.js_actual_street option', parent).eq(street_selected_index).prop('selected', true);
			$('.js_actual_street li', parent).removeClass('sel selected');
			$('.js_actual_street li', parent).eq(street_selected_index).addClass('sel selected');
			$('.js_actual_street .jq-selectbox__select-text', parent).html($('.js_actual_street option:selected', parent).html());
		}	
		else if (isCheked==false) {
			$('.js_actual_index_val', parent).val("");
			$('.js_actual_house_val', parent).val("");
			$('.js_actual_additional_val', parent).val("");
	
			$('.js_actual_street option', parent).eq(0).prop('selected', true);
			$('.js_actual_street li', parent).removeClass('sel selected');
			$('.js_actual_street li', parent).eq(0).addClass('sel selected');
			
			$('.js_actual_region option', parent).eq(0).prop('selected', true);
			$('.js_actual_region li', parent).removeClass('sel selected');
			$('.js_actual_region li', parent).eq(0).addClass('sel selected');
			
			$('.js_actual_city option', parent).eq(0).prop('selected', true);
			$('.js_actual_city li', parent).removeClass('sel selected');
			$('.js_actual_city li', parent).eq(0).addClass('sel selected');
			
			$('.js_actual_street .jq-selectbox__select-text', parent).html($('.js_actual_street option:selected', parent).html());
			$('.js_actual_region .jq-selectbox__select-text', parent).html($('.js_actual_region option:selected', parent).html());
			$('.js_actual_city .jq-selectbox__select-text', parent).html($('.js_actual_city option:selected', parent).html());
		}
	})
}
/*end registration page checkboxes functions*/

/*remove input placeholders on click*/
function ClearPlaceholder(){
	$('input,textarea').focus(function(){
		 $(this).data('placeholder',$(this).attr('placeholder'))
		 $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		 $(this).attr('placeholder',$(this).data('placeholder'));
	});
}
/*end remove placeholders on click*/





/*catalog height*/
function SetCatalogMenuHeight(){
	var offset = $('.header_bottom_block').offset();
	var catalog_height = $('.catalog_hidden_block').innerHeight();
	var window_height = $(window).height();
	//alert(catalog_height+offset.top+$('.header_bottom_block').innerHeight());
	//alert(window_height);
	
	if(window_height<=catalog_height+offset.top+$('.header_bottom_block').innerHeight()){
		$('.catalog_hidden_block').height(window_height-60-153);
		
		$('.js_scroll_pane').jScrollPane({							
			showArrows: true
		});
	}
	else{
		$('.catalog_hidden_block').css('height', 'auto');
		$('.jspContainer').css('height', 'auto');
		$('.jspPane').css('position', 'relative');
		$('.jspVerticalBar').css('display', 'none');
	}
	//$('.catalog_hidden_block').css('max-height', default_height+'px');

	
}

$(document).ready(function(){
	AlignPopup();
	initTabs();
	init_small_side_panel();
	ItemCounter();
	$(window).scroll();
	
	changePriceView();
	ItemCounterAmount();
	setMainItemPrice();
	setItemPrice();
	FinalMainItemPrice();
	FinalCartItemPrice();
	catalogCheckFilter();
	ChooseProductCheckFilter();
	 initFilterTabs();
	
	
	
	SetCatalogMenuHeight();

/*registration page checkboxes functions*/
	RegistrationShowAdresses();
	showDeliveryAddress();
	CopyLegalAddress();
	CopyActualAddress();
	RegistrationActivateRadio();
	RegistrationShowAdresses();
	CopyLegalAddressLK();
	ClearPlaceholder();
	
	var footer_height = $('.footer_holder').innerHeight();
$('.header_and_content_holder').css('padding-bottom',footer_height+'px');
	
/*item hover*/	
	$('.block_show').mouseover(function(){
		$(this).parent().find('.block_hide').css('display' , 'inline-block');
		$(this).parent().css('width', '455px');
		$(this).closest('.js_item_block').addClass('hover');
	})
	$('.block_show').mouseout(function(){
		$(this).parent().find('.block_hide').css('display' , 'none');
		$(this).parent().css('width', 'auto');
		$(this).closest('.js_item_block').removeClass('hover');
	})
/*end item hover*/	


/*autocomplete city*/	
if($('.js_find_city').length>0){
	var options = {
		data: ["blue", "green", "pink", "red", "yellow"],
	};
	$(".js_find_city").easyAutocomplete(options);	
}
/*end autocomplete city*/


/*registration page checkboxes functions*/	
	$('.js_represent').change(function(){
		RegistrationActivateRadio();
	})
	
	$('.represent_block input[type=radio]').change(function(){
		RegistrationShowAdresses();
	})
	
	$('.js_fill_delivery_address').change(function(){
		showDeliveryAddress();
	})
	$('.js_copy_legal_address').change(function(){
		CopyLegalAddress();
	})
	
	$('.js_copy_legal_addressLK').on('change', function(){
		CopyLegalAddressLK();
	})
	
	
	
	$('.js_copy_actual_address').change(function(){
		CopyActualAddress();
	})
/*end registration page checkboxes functions*/	


	$(".js_phone_mask").mask("+7 (999) 999-99-99");
	$(".js_index_mask").mask("99-99-99");





	$('.catalog_filter_items_holder .block input[type=checkbox]').change(function(){													 
		catalogCheckFilter();
	})
	$('.catalog_filter_items_holder .btn_reset').click(function(e){	
		e.preventDefault();
		$(this).closest("form").find('input[type=checkbox]').prop('checked',false);
		catalogCheckFilter();
	})
	$('.js_choose_products_block_filter input[type=checkbox]').change(function(){													 
		ChooseProductCheckFilter();
	})




/*tooltip*/
	var content = "";
	$('.js_tooltip').tooltipster({
		 contentAsHTML: true,
		 content: content,
		 interactive:true,
		 position:'bottom',
		 speed:100,
		 updateAnimation:false,
		 onlyOne:true
		//autoClose:false
	});
	$('.js_tooltip').mouseover(function(){
		content = $(this).find('.tooltip_content').html();
		$(this).tooltipster('content', content);
	})
	
	
	/*$('.js_tooltip_item_property').tooltipster({
		 contentAsHTML: true,
		 content: content,
		 interactive:true,
		 position:'bottom',
		 speed:100,
		 updateAnimation:false,
		 onlyOne:true
		//autoClose:false
	});
	$('.js_tooltip_item_property').mouseover(function(){
		content = $(this).find('.tooltip_content').html();
		$(this).tooltipster('content', content);
	})*/
/*end tooltip*/

/*custom scroll*/		
	$('.js_scroll_pane').jScrollPane({							
		showArrows: false,	
	});
	
	var pane = $('.js_scroll_table').jScrollPane({							
		showArrows: true,	
		speed:226
	});
	var api = pane.data('jsp');	

	
	$('.js_scroll_table').bind(
			'jsp-scroll-x',
			function(event, scrollPositionX)
			{
				$('.bottom_table .items_parameters_table').css('left', '-'+scrollPositionX+'px');														
			}
		);
/*end custom scroll*/	


/*go top link*/
	$('.js_scrollTo').click(function(e){
		e.preventDefault();	
		var href = $(this).attr('href');
		$('body').scrollTo(href,{duration:'slow',offset: -180});
	})
/*end go top*/	



/*-------------OLD Browser Panel---------------------------------------*/	
if (browser=='Firefox'){
		if(browser_version<40){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
			}
	}
	if (browser=='Chrome'){
		if(browser_version<45){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
			}
	}
	if (browser.search("IE")!=-1){
		if(browser_version<=9){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
		}
	}
	if (browser_version.search("Opera")!=-1){
		var res = browser_version.split(" "); 
		if(res[1]<20){
			$('.old_browser_block').addClass('visible');
		}
	}
	if (browser=='Safari'){
		if(browser_version<5){
			$('.old_browser_block').addClass('visible');
			
		}
	}
	/*end Get browser version*/


	/*panel for old browser*/
	$('.close_old_browser_panel').click(function(e){
		e.preventDefault();
		$(this).parent().parent().fadeOut();
		$('.old_browser_overlay').fadeOut();
	});	
	/*panel forl old browser*/

/*-------------END OLD Browser Panel---------------------------------------*/	


/*----------------------Revealing list click-----------------*/
	$('.js_holder.active').find('.js_block').css('display', 'block');
	$('.js_heading').click(function(e){
		e.preventDefault();
	 	if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('.js_block').slideUp();
		 }
		 else{
			$(this).parent().addClass('active');
			$(this).parent().find('.js_block').slideDown();
		 }
	});	
		
/*----------------------end Revealing list click-----------------*/		



/*----------------------Revealing list click-----------------*/
	$('.js_holder_main.active').find('.js_block_main').css('display', 'block');
	$('.js_heading_main').click(function(e){
		e.preventDefault();
	 	if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('.js_block_main').slideUp();
		 }
		 else{
			$(this).parent().addClass('active');
			$(this).parent().find('.js_block_main').slideDown();
		 }
	});	
		
/*----------------------end Revealing list click-----------------*/		
	

/*price range slider*/
    $("#range_slider").slider({
        min: 0,
        max: 100000,
        step: 1,
		range: true,
        values: [0, 20000],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").keyup(function() {
        var $this = $(this);
        $("#range_slider").slider("values", $this.data("index"), $this.val());
    });
	$("input.sliderValue").change(function() {
        var $this = $(this);
        $("#range_slider").slider("values", $this.data("index"), $this.val());
    });
/*end price range slider*/


$('.js_file_input').change(function(){
	ChooseFile();						
})

	
/*show catalog list*/	
	$('.js_catalog').click(function(e){
		
		e.preventDefault();	
		e.stopPropagation();	
		
		var href = $(this).attr('href');
		if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/Blackberry/i) )
    	{
			location.href=href;
		}
		
		else{
			$(this).parent().find('.catalog_hidden_block').fadeToggle();
			$(this).toggleClass('active');
			$('.js_scroll_pane').jScrollPane({							
				showArrows: true
			});
		}
		
	})
	$('.catalog_hidden_block').click(function(e){				
		e.stopPropagation();	
	})
	

	$('body').click(function(e){
		e.stopPropagation();
		$('.catalog_hidden_block').fadeOut();
		$('.js_catalog').removeClass('active');
		$('.js_phones_block').fadeOut();
		$('.personal_cabinet_dropdown_block').fadeOut();	
		$('.js_catalog_block').removeClass('active');	
	})
	
	$('.js_btn_close_catalog').click(function(e){
		e.preventDefault();
		$('.catalog_hidden_block').fadeToggle();
		$('.js_catalog').toggleClass('active');
	});
/*show catalog list*/


/*-------------------custom select-------------------*/
	$('.js_select select').styler({
		selectSearch:false
	});
	
/*-------------------custom select-------------------*/

/*-----------------------------POPUP-------------------------*/
var flag=true;
var startSlide;

    $('[data-popup]').on('click', function(e){
        e.preventDefault();
		AlignPopup();
		InitPopup($(this));

		/*images gallery carousel*/
		startSlide = parseInt($(this).attr('data-current'));
		if($(this).attr('data-popup')=='js_photo_gallery_popup'){
			if(flag){
			$('#photo_carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				itemWidth: 152,
				itemMargin: 10,
				asNavFor: '#photo_slider',
				prevText: "", 
				mousewheel: false, 
				startAt: startSlide,
				nextText: ""
			
			  });
	
			  $('#photo_slider').flexslider({
				animation : 'slide',
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#photo_carousel",
				startAt: startSlide,
				prevText: "",     
				nextText: "",
				smoothHeight:true,
				animationSpeed: 300,   
				start: function(slider) {
					AlignPopup();				 
					   flexslider = slider; 
				  }
			  });
			  $(window).resize();
			   flag = false;
			  /*images gallery carousel*/
			 
			}else{
				flexslider.flexAnimate(startSlide);
		   }
		}	
		/*images gallery carousel*/
		
		
		
   });
	

    $('.custom-overlay, .custom-popup .js_close').on('click',function(e){
		e.preventDefault();	
		$('.custom-overlay').delay(200).fadeOut('300');																		  
		$('.custom-popup').fadeOut('300');	
		$('.page').removeClass('blur');
		
		
		if($('#video_src')){
			//document.getElementById('sert_resourse').innerHTML = '';
			$('.mejs-pause').click();
			
			$('#video_src').attr('src', '');
		}	

    });
/*-----------------------END POPUP----------------------------*/

//*switch view*/
if($('.js_viewleft').hasClass('active')){
	$('.js_view_content_1').addClass('active');
	$('.js_view_content_2').removeClass('active');
	$('.js_view_img').removeClass('js_viewright_img');
	$('.js_view_img').addClass('js_viewleft_img');
	
}
if($('.js_viewright').hasClass('active')){
	$('.js_view_content_1').removeClass('active');
	$('.js_view_content_2').addClass('active');
	$('.js_view_img').removeClass('js_viewleft_img');
	$('.js_view_img').addClass('js_viewright_img');
	
}
$('.js_viewleft').click(function(e){
		e.preventDefault();
		$('.js_viewright').removeClass('active');
		$('.js_viewleft').addClass('active');
		$('.js_view_content_1').addClass('active');
		$('.js_view_content_2').removeClass('active');
		$('.js_view_img').removeClass('js_viewright_img');
		$('.js_view_img').addClass('js_viewleft_img');	
});

$('.js_viewright').click(function(e){
		e.preventDefault();
		$('.js_viewleft').removeClass('active');
		$('.js_viewright').addClass('active');
		$('.js_view_content_2').addClass('active');
		$('.js_view_content_1').removeClass('active');
		$('.js_view_img').removeClass('js_viewleft_img');
		$('.js_view_img').addClass('js_viewright_img');
});

$('.js_view_img').click(function(){
	if($(this).hasClass('js_viewleft_img')){
		$('.js_viewright').click();
	}
	else if($(this).hasClass('js_viewright_img')){
		$('.js_viewleft').click();
	} 
})
/*end switch view*/



/*uncheck all checkboxes*/
$('.js_remove_checkbox').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var id = $(this).attr('id');	
	$(this).closest("form").find('input[type=checkbox][data-remove-id=' + id +']').prop('checked',false);
	catalogCheckFilter();
	ChooseProductCheckFilter();
})


$('.js_choose_products_reset').click(function(e){
	e.preventDefault();
	$(this).closest("form").find('input[type=checkbox]').prop('checked',false);
	ChooseProductCheckFilter();
})


$('.js_reset').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).closest("form").find('input[type=checkbox]').prop('checked',false);
	
})
/*end uncheck all checkboxes*/

/*remove comparison list*/
$('.js_btn_remove_filter_1').click(function(e){
	e.preventDefault();
	$(this).parent().parent().parent().fadeOut(300, function(){
		$(this).remove();										   
	});			
})
/*end remove comparison list*/






$('.js_filter_view_list').click(function(e){
	e.preventDefault();
	$(this).parent().find('.js_filter_view_tile').removeClass('active');	
	$(this).addClass('active');
	$('.js_catalog_list_view_block').addClass('active');
	$('.js_catalog_tile_view_block').removeClass('active');
})
$('.js_filter_view_tile').click(function(e){
	e.preventDefault();
	$(this).parent().find('.js_filter_view_list').removeClass('active');	
	$(this).addClass('active');
	$('.js_catalog_tile_view_block').addClass('active');
	$('.js_catalog_list_view_block').removeClass('active');
})
if($('.js_filter_view_list').hasClass('active')){
	$(this).parent().find('.js_filter_view_tile').removeClass('active');	
	$(this).addClass('active');
	$('.js_catalog_list_view_block').addClass('active');
	$('.js_catalog_tile_view_block').removeClass('active');
	
}

if($('.js_filter_view_tile').hasClass('active')){
	$(this).parent().find('.js_filter_view_list').removeClass('active');	
	$(this).addClass('active');
	$('.js_catalog_tile_view_block').addClass('active');
	$('.js_catalog_list_view_block').removeClass('active');
}




$('.js_filter_show').click(function(e){
	e.preventDefault();
	$(this).parent().find('.js_filter_show').removeClass('active');	
	$(this).addClass('active');
})



/*check unckeck all checkboxes in group*/
$('.js_all').change(function(){
	var id = $(this).attr('id');	
	var isCheked = $(this).prop('checked');	
	if(isCheked==true){
		$(this).closest("form").find('input[type=checkbox][data-id=' + id +']').prop('checked',true);
		$(this).prop('checked',true);	
		ChooseProductCheckFilter();
	}	
	else if (isCheked==false) {
		$(this).closest("form" ).find('input[type=checkbox][data-id=' + id +']').prop('checked',false);	
		$(this).prop('checked',false);	
		ChooseProductCheckFilter();
	}
})
/*end check unckeck all checkboxes in group*/



/*show hide readmore content*/
$('.js_read_more').click(function(e){
	e.preventDefault();
	$(this).toggleClass('read_more_active');
	$(this).parent().find('.js_read_more_hidden_content').slideToggle();	
	
})
/*end show hide readmore content*/


/*show hide right panel*/
$('.js_show_hide_panel').click(function(e){
	 e.preventDefault();		
	 $(this).toggleClass('active');	
	$('.all_bookmarks').slideToggle();									
});	
/*end show hide right panel*/


/*empty form file input*/
$('.js_remove_file').click(function(e){
	 e.preventDefault();		
	 $(this).parent().parent().find('.js_file_value').empty();	
		$('.js_remove_file').css('display', 'none');
		$('.file_name_holder').css('display', 'none');
});	

/*end empty form file input*/



/*item previews click*/
$('.js_preview_small').click(function(e){
	 e.preventDefault();
	 var id = $(this).attr('data-pic-id');
	 $('.js_preview_small').removeClass('active');
	 $(this).addClass('active');	
	 var src = $(this).find('img').attr('src');
	 $('.js_preview_big').find('img').fadeOut(300, function(){
		$('.js_preview_big').find('img').attr('src',src);
		$('.js_preview_big .image_block').attr('data-current', id);
		$('.icon_zoom').attr('data-current', id);
		
	 	$('.js_preview_big').find('img').fadeIn();								
	});
});	
/*item previews click*/


/*swiper sliders*/
	var js_partners_slider = new Swiper('.js_partners_slider .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		nextButton: '.js_partners_slider .js_swiper_next',
		prevButton: '.js_partners_slider .js_swiper_prev'
	});

	var catalog_slider = new Swiper('.js_catalog_slider .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		nextButton: '.js_catalog_slider .js_swiper_next',
		prevButton: '.js_catalog_slider .js_swiper_prev'
	});
	
	var swipersmall = new Swiper('.js_swiper_small .swiper-container', {
		slidesPerView: '3',
		spaceBetween: 10,
		loop:false,
		nextButton: '.js_swiper_small .js_swiper_next',
		prevButton: '.js_swiper_small .js_swiper_prev',
		mousewheelControl: true
	});

	var similar_items_block_1 = new Swiper('.js_similar_items_block_1', {
        spaceBetween: 0,
        slidesPerView: 2,
        loop:false,
		direction: 'vertical',
		nextButton: '.similar_items_block_1_slider .js_swiper_next',
		prevButton: '.similar_items_block_1_slider .js_swiper_prev'
    });

	var items_slider = new Swiper('.js_items_slider1 .swiper-container', {
		slidesPerView: '5',
		spaceBetween: 25,
		loop:false,
		nextButton: '.js_items_slider1 .js_swiper_next',
		prevButton: '.js_items_slider1 .js_swiper_prev',
		mousewheelControl: false,
		simulateTouch: false
	});

	var items_slider2 = new Swiper('.js_items_slider2 .swiper-container', {
		slidesPerView: '5',
		spaceBetween: 25,
		loop:false,
		nextButton: '.js_items_slider2 .js_swiper_next',
		prevButton: '.js_items_slider2 .js_swiper_prev',
		mousewheelControl: false,
		simulateTouch: false
	});

	var main_top_slider = new Swiper('.main_top_slider .swiper-container', {
		slidesPerView: '1',
		spaceBetween: 0,
		loop:true,
		nextButton: '.main_top_slider .js_swiper_next',
		prevButton: '.main_top_slider .js_swiper_prev',
		mousewheelControl: false,
		pagination: '.swiper-pagination',
        paginationClickable: true,
		speed:700,
		effect: 'fade',
		autoplay:10000,
		simulateTouch: false
	});	
/*end swiper sliders*/	
	
	posHoverBlockInSlider();
	
	$('.icon_question_block, .icon_info_block').click(function(e){
		e.preventDefault();														   
		e.stopPropagation();										 
	})
	
	
/*add hover to text or image when hover on item image or text*/	
	$('.items_block .image_block, .items_block_list_view .image_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.title_block').toggleClass('hover');
	})
	$('.items_block .title_block, .items_block_list_view .title_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.image_block').toggleClass('hover');
	})
	
	$('.similar_items_block_1 .item_title_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.item_image_block').toggleClass('hover');
	})
	$('.similar_items_block_1 .item_image_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.item_title_block').toggleClass('hover');
	})
	
	
	
	$('.recently_items_block .item_title_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.item_image_block').toggleClass('hover');
	})
	$('.recently_items_block .item_image_block').hover(function(){
		var parent = $(this).closest('.block');
		parent.find('.item_title_block').toggleClass('hover');
	})
/*end of add hover to text or image when hover on item image or text*/	


	/*show phones block*/
	$('.js_phones').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.js_phones_block').fadeToggle();
	})
	
	$('.js_phones_block').click(function(e){
		e.stopPropagation();
	})
	/*end show phones block*/
	
	/*show amount info message*/
	$('.add_to_cart_block_1 .js_counter_input, .cart_items_block .js_counter_input').focus(function(){
		$(this).parent().parent().find('.info_text').fadeIn();				   
	})
	
	$('.add_to_cart_block_1 .js_counter_input, .cart_items_block .js_counter_input').blur(function(){
		$(this).parent().parent().find('.info_text').fadeOut();				   
	})
	var interval;
	$('.add_to_cart_block_1 .js_btn_counter_next, .add_to_cart_block_1 .js_btn_counter_prev').click(function(){
		clearTimeout(interval);
		$(this).parent().parent().find('.info_text').fadeIn();
		interval = setTimeout(function() { $('.add_to_cart_block_1 .item_counter .info_text').fadeOut(); }, 5000);
	})
	
	
	
	$('.cart_items_block .js_btn_counter_next, .cart_items_block .js_btn_counter_prev').click(function(){
		clearTimeout(interval);
		$(this).parent().parent().find('.info_text_cart').fadeIn();
		interval = setTimeout(function() { $('.cart_items_block .item_counter .info_text_cart').fadeOut(); }, 5000);
	})
	
	
	$('.js_item_block .js_btn_counter_next').click(function(){
		clearTimeout(interval);
		$(this).closest('.js_item_block ').find('.info_text').fadeIn();
		interval = setTimeout(function() { $('.info_text').fadeOut(); }, 5000);
	})
	
	$('.js_item_block .js_btn_counter_prev').click(function(){
		clearTimeout(interval);
		var infotext = $(this).closest('.js_item_block ').find('.info_text')
		infotext.fadeIn();
		interval = setTimeout(function() { infotext.fadeOut(); }, 5000);
	})
	
	$('.js_item_block  .js_counter_input').focus(function(){
		var infotext = $(this).closest('.js_item_block ').find('.info_text')
		infotext.fadeIn();		   
	})
	
	$('.js_item_block .js_counter_input').blur(function(){
		var infotext = $(this).closest('.js_item_block ').find('.info_text')
		infotext.fadeOut();		   
	})
	/*end show amount info message*/
	
	
	
	
	
	
	/*show hide password in input*/
	$('.js_pass_show_hide').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parent().find('input').prop("type", "password");
		}
		else{
			$(this).addClass('active');
			$(this).parent().find('input').prop("type", "text");
		}
		
	})
	/*end show hide password in input*/
	
/*show dropdown of personal cabinet*/
	$('.js_personal_cabinet').click(function(e){
		e.stopPropagation();
		$('.personal_cabinet_dropdown_block').fadeToggle();	
		$(this).toggleClass('opened');
	})
/*end show dropdown of personal cabinet*/
	

	
/*remove cart item*/
	$('.js_remove_cart_item').click(function(e){
		e.preventDefault();	
		$(this).closest('.js_item_block').fadeOut(function(){
			$(this).remove();											   
			showFinalResult();											   
		});
	})
/*end remove cart item*/
	
/*edit profile*/

$('.js_btn_edit_record_LK').click(function(e){
		e.preventDefault();	
		$(this).closest('.profile_list_block').find('.js_profile_info_text').fadeOut(function(){
		$(this).closest('.profile_list_block').find('.js_profile_info_input').fadeIn();
		$(this).closest('.profile_list_block').find('.js_profile_info_select').fadeIn();
		$(this).closest('.block').find('.js_profile_btn_save').fadeIn();
		$(this).closest('.profile_list_block').find('.edit_payers_block').fadeIn();
		$(this).closest('.profile_list_block').find('.js_btn_delete_profile').fadeIn();
		});
	})
	$('.js_btn_edit_profile').click(function(e){
		e.preventDefault();	
		$(this).closest('.block').find('.js_profile_info_text').fadeOut(function(){
		$(this).closest('.block').find('.js_profile_info_input').fadeIn();
		$(this).closest('.block').find('.js_profile_info_select').fadeIn();
		$(this).closest('.block').find('.js_profile_btn_save').fadeIn();
		$(this).closest('.block').find('.edit_payers_block').fadeIn();
		$(this).closest('.profile_list_block').find('.js_btn_delete_profile').fadeIn();
		});
	})
/*end edit profile*/	


$('.js_btn_delete_profile').click(function(e){
	e.preventDefault();	
	$(this).closest('.profile_list_block').fadeOut();
})




/*add profile new record*/
	$('.js_btn_add_profile_field').click(function(e){
		e.preventDefault();	
		var number = $(this).closest('.block').find('.profile_list_block').length+1;
		
		if($(this).attr('data-add') == "representatives"){
			var content = "<div class='profile_list_block'><div class='profile_list_block_inner'><div class='number'>"+number+"</div><div class='profile_right_block'><input type='text' class='profile_info_input_personal js_profile_info_input new' placeholder='Oaieeey'><input type='text' class='profile_info_input_personal js_profile_info_input new' placeholder='Eiy'><input type='text' class='profile_info_input_personal js_profile_info_input new' placeholder='Io?anoai'><input type='text' class='profile_info_input_personal js_profile_info_input new' placeholder='E-mail'></div><div class='clear'></div></div></div>"
		}
		if($(this).attr('data-add') == "delivery_adresses"){
			var content = "<div class='profile_list_block'><div class='profile_list_block_inner'><div class='number'>"+number+"</div><div class='profile_right_block'><input type='text' class='profile_info_input_index js_profile_info_input new' placeholder='A?A­A¤A?A?A±'><div class='custom_select new js_select profile_info_select js_profile_info_select'><select> <option >A?A?A?A?A®A­</option></select></div><input type='text' class='profile_info_input_street js_profile_info_input new' placeholder='A“A«A?A¶A '><div class='custom_select new js_select profile_info_select js_profile_info_select'> <select><option>A?A A±A?A«A?A­A­A»A© A?A?A­A?A?</option></select></div><input type='text' class='profile_info_input_house js_profile_info_input new' value='' placeholder='A„A®A¬, A?A®A°A?A?A±'><input type='text' class='profile_info_input_room js_profile_info_input new' placeholder='ASA?A A°A?A?A°A '></div><div class='clear'></div></div></div>"
		}
		
		if($(this).attr('data-add') == "payers"){
			var content = "<div class='profile_list_block'><div class='profile_list_block_inner'> <div class='number'>"+number+"</div> <div class='profile_right_block'><div class='edit_payers_block new'> <div class='tabs_block_3'> <div class='tab_links'> <a href='#' data-tab='tab_section1' class='active'><span>A?A­A?A®A°A¬A A¶A?A? A® A?A®A¬A?A A­A?A?</span></a> <a href='#' data-tab='tab_section2'><span>AzA°A?A¤A?A·A?A±A?A?A© A A¤A°A?A±</span> </a> <a href='#' data-tab='tab_section3'><span>A”A A?A?A?A·A?A±A?A?A© A A¤A°A?A±</span></a> </div> <div class='tab_block_holder'> <div id='tab_section1' class='hidden_content active'> <div class='tab_block'> <div class='payers_block'> <div class='payers_block_row'> <div class='block_left'> <div class='custom_select js_select'> <select> <option disabled>A”A®A°A¬A  A±A®A?A±A?A?A?A­A­A®A±A?A?</option> <option>A”A®A°A¬A  A±A®A?A±A?A?A?A­A­A®A±A?A? 1</option> </select> </div> </div> <div class='block_right'> <input type='text'placeholder='ASA?A?'> </div> <div class='clear'></div> </div> <div class='payers_block_row'><div class='block_left'><input type='text' placeholder='A?A A?A¬A?A­A®A?A A­A?A? A?A®A¬A?A A­A?A?'> </div> <div class='block_right'> <input type='text' class='js_phone_mask' placeholder='A’A?A«A?A?A®A­ A®A°A?A A­A?A§A A¶A?A?'> </div> <div class='clear'></div> </div> <div class='payers_block_row'> <div class='block_left'> <input type='text' placeholder='AZASA?AZ'> </div> <div class='block_right'> <input type='text' placeholder='A?A®A¬A?A° A?A A?A±A '> </div> <div class='clear'></div> </div> <div class='payers_block_row'> <div class='block_left'> <input type='text' placeholder='A?A?A?'> </div> <div class='block_right'> <input type='text' placeholder='E-mail A®A°A?A A­A?A§A A¶A?A?'></div><div class='clear'></div></div> </div></div></div><div id='tab_section2' class='hidden_content'><div class='tab_block'><div class='payers_block'><div class='payers_block_row'><div class='block_left'><input type='text' class='js_legal_index_val' placeholder='A?A­A¤A?A?A±'></div><div class='block_right'><div class='custom_select js_select js_legal_street'><select><option disabled>A“A«A?A¶A </option><option>A“A«A?A¶A  1</option></select></div></div><div class='clear'></div></div><div class='payers_block_row'><div class='block_left'><div class='custom_select js_select js_legal_region'><select><option disabled>A?A?A?A?A®A­</option><option>A?A?A?A?A®A­ 1</option></select></div></div><div class='block_right'><input type='text' class='js_legal_house_val' placeholder='A„A®A¬, A?A®A°A?A?A±, A®A?A?A±'></div><div class='clear'></div></div><div class='payers_block_row'><div class='block_left'><div class='custom_select js_select js_legal_city'><select><option disabled>A?A A±A?A«A?A­A­A»A© A?A?A­A?A?</option><option>A?A A±A?A«A?A­A­A»A© A?A?A­A?A? 1</option></select></div></div><div class='block_right'><input type='text' class='js_legal_additional_val' placeholder='A„A®A?. A?A­A?A®A°A¬A A¶A?A?'></div><div class='clear'></div></div></div></div></div><div id='tab_section3' class='hidden_content'><div class='tab_block'><div class='payers_block'><div class='payers_block_row'><div class='block_left'><label class='checkbox_label'><input type='checkbox' class='js_copy_legal_addressLK'><span class='label-text'>A‘A®A?A?A A¤A A?A? A± A?A°A?A¤A?A·A?A±A?A?A¬</span></label></div><div class='block_right'><label class='checkbox_label'><input type='checkbox'><span class='label-text'>A„A®A?A A?A?A?A? A? A A¤A°A?A±A  A¤A®A±A?A A?A?A?</span></label></div><div class='clear'></div></div><div class='payers_block_row'><div class='block_left'><input type='text' class='js_actual_index_val' placeholder='A?A­A¤A?A?A±'></div><div class='block_right'><div class='custom_select js_select js_actual_street'><select><option disabled>A“A«A?A¶A </option><option>A“A«A?A¶A  1</option></select></div></div><div class='clear'></div></div><div class='payers_block_row'><div class='block_left'><div class='custom_select js_select js_actual_region'><select><option disabled>A?A?A?A?A®A­</option><option>A?A?A?A?A®A­ 1</option></select></div></div><div class='block_right'><input type='text' class='js_actual_house_val' placeholder='A„A®A¬, A?A®A°A?A?A±, A®A?A?A±'></div><div class='clear'></div></div><div class='payers_block_row'><div class='block_left'><div class='custom_select js_select js_actual_city'><select><option disabled>A?A A±A?A«A?A­A­A»A© A?A?A­A?A?</option><option>A?A A±A?A«A?A­A­A»A© A?A?A­A?A? 1</option></select></div></div><div class='block_right'><input type='text' class='js_actual_additional_val' placeholder='A„A®A?. A?A­A?A®A°A¬A A¶A?A?'></div><div class='clear'></div></div></div></div></div></div></div></div></div><div class='clear'></div></div></div>" }
		
		
		$(this).closest('.block').find('.js_adding_fields_block').append(content);
		$(this).closest('.block').find('.js_profile_btn_save').fadeIn();
		
		initTabs();
		ClearPlaceholder();
		$(".js_phone_mask").mask("+7 (999) 999-99-99");
		
		$('.js_copy_legal_addressLK').on('change', function(){
			CopyLegalAddressLK();
		})
		
		$('.js_select select').styler({
			selectSearch:false
		});
	})
/*end add profile new record*/

	
/*poll page show hide polls*/	
	$('.js_btn_view_results').click(function(e){
		e.preventDefault();	
			var parent = $(this).closest('.block');
			parent.find('.js_btn_view_results').css('display' ,'none');	
			parent.find('.pass_poll_block').fadeOut(function(){
			parent.find('.poll_result_block').fadeIn();	
			parent.find('.submit_pass_poll').css('display' ,'none');	
			parent.find('.btn_pass_poll').css('display' ,'block');
			parent.find('.js_btn_view_results').fadeOut();	
		});
	})
	
	$('.js_pass_poll').click(function(e){
			e.preventDefault();	
			var parent = $(this).closest('.block');
			parent.find('.poll_result_block').fadeOut(function(){
			parent.find('.pass_poll_block').fadeIn();	
			parent.find('.submit_pass_poll').css('display' ,'block');
			parent.find('.btn_pass_poll').css('display' ,'none');
			parent.find('.js_btn_view_results').fadeIn();
		});
	})
/*end poll page show hide polls*/		
	

/*order history btn*/
	$('.js_btn_order_history_show_hide').click(function(e){
		e.preventDefault();	
		$(this).toggleClass('active');
		$(this).closest('.order_history_block').find('.order_history_hidden_block').slideToggle();
	})
	$('.js_btn_order_history_remove').click(function(e){
		e.preventDefault();	
		$(this).closest('.order_history_block').fadeOut();
	})
/*end order history btn*/
	
	
	
/*check if mobilde device do not fix  header block*/	
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/Blackberry/i) )
    {
		$('.header_bottom_block').addClass('mobile');
		$('.header_top_block').addClass('mobile');
	}
/*end check if mobilde device do not fix  header block*/	





/*show recently view items*/
$('.js_btn_recently_view').click(function(e){
		e.preventDefault();	
		$(this).toggleClass('active');
		$('.recently_viewed_block').slideToggle();
		
		
		var recently_items_slider = new Swiper('.recently_items_block .swiper-container', {
			slidesPerView: '4',
			spaceBetween: 30,
			loop:false,
			nextButton: '.recently_items_block .js_swiper_next',
			prevButton: '.recently_items_block .js_swiper_prev',
			mousewheelControl: false,
			simulateTouch: false
		});
	})

/*end show recently view items*/




/*item fly to cart effect*/
$('.add_to_cart_block_1 .js_btn_add_to_cart_2').click(function(e){
		e.preventDefault();	
		var img = $('.item_main_block .item_preview_block_holder .item_preview_big img');
        img.clone()
            .css({'position' : 'absolute', 'z-index' : '11100', 'width' : '500px', top: $(this).offset().top-310, left:$(this).offset().left-850})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $('.cart_block').offset()['left'],
                top: $('.cart_block').offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
            });

    });
$('.js_btn_add_to_cart_3').click(function(e){
		e.preventDefault();	
		var img = $('.items_block .block_show .image_block img');
        img.clone()
            .css({'position' : 'absolute', 'z-index' : '11100', 'width':'270px', top: $(this).offset().top-360, left:$(this).offset().left-20})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $('.cart_block').offset()['left'],
                top: $('.cart_block').offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
            });

    });
$('.js_btn_add_to_cart_4').click(function(e){
		e.preventDefault();	
		var img = $('.similar_items_block_1 .block .item_image_block img');
        img.clone()
            .css({'position' : 'absolute', 'z-index' : '11100', 'width':'102px', top: $(this).offset().top-60, left:$(this).offset().left-120})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $('.cart_block').offset()['left'],
                top: $('.cart_block').offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
            });

    });
/*end item fly to cart effect*/







/*show catalog item hidden info*/
$('.js_catalog_block').click(function(e){
	e.stopPropagation();	
	$('.js_catalog_block').removeClass('active');	
	$(this).addClass('active');		
})
/*end show catalog item hidden info*/



$('.js_btn_clear_items').click(function(e){
	e.preventDefault();		
	$(this).parent().find('.block').fadeOut();
	$('.js_catalog_block').fadeOut();
	$('.pagination_holder').fadeOut();
})


$('.cart_item_image a').mouseover(function(){
	$(this).parent().parent().parent().find('.cart_item_name a').addClass('hover');
})
$('.cart_item_image a').mouseout(function(){
	$(this).parent().parent().parent().find('.cart_item_name a').removeClass('hover');
})
$('.cart_item_name a').mouseover(function(){
	$(this).parent().parent().parent().find('.cart_item_image a').addClass('hover');
})
$('.cart_item_name a').mouseout(function(){
	$(this).parent().parent().parent().find('.cart_item_image a').removeClass('hover');
})
$('.compare_items .image').mouseover(function(){
	$(this).parent().parent().parent().find('.item_title_block').addClass('hover');
})
$('.compare_items .image').mouseout(function(){
	$(this).parent().parent().parent().find('.item_title_block').removeClass('hover');
})
$('.compare_items .item_title_block').mouseover(function(){
	$(this).parent().parent().parent().find('.compare_items .image').addClass('hover');
})
$('.compare_items .item_title_block').mouseout(function(){
	$(this).parent().parent().parent().find('.compare_items .image').removeClass('hover');
})

$('.item_delete_link').click(function(e){
	e.preventDefault();		
	var id = $(this).attr('id');
	$('.compare_right_block .item_block[data-id='+id+']').remove();
	$('.compare_right_block .col_items_parameters[data-id='+id+']').remove();
	$('.compare_right_block .col_items_parameters[data-id='+id+']').remove();
	
	
	

	$('.js_scroll_table').jScrollPane({							
		showArrows: true,	
	});
	if($('.compare_items .item_block').length<=4){
		$('.jspHorizontalBar').css('display','none');
		$('.btn_compare_left').css('display','none');
		$('.btn_compare_right').css('display','none');
	}
})

if($('.compare_items .item_block').length<=4){
	$('.jspHorizontalBar').css('display','none');
	$('.btn_compare_left').css('display','none');
	$('.btn_compare_right').css('display','none');
}


 

/*-------------------validation-------------------*/
	$.validate({
	  form : '.js_validation',
	  /*onError : function() {
            alert('Validation failed');
        },*/
		onSuccess : function() {
          
             // Will stop the submission of the form
        }
		/*,
        onValidate : function() {
            return {
                element : $('#some-input'),
                message : 'This input has an invalid value for some reason'
            }
        }*/
	});
/*-------------------validation-------------------*/



/*-------------validation-------------------*/
	$.validate({
	  form : '.js_validation_order_call',
	  /*onError : function() {
            alert('Validation failed');
        },*/
		onSuccess : function() {
			$('.js_order_call_popup').fadeOut();
		   $('.js_thank_message_popup').fadeIn();
		   return false;
        },
		scrollToTopOnError:false
        /*onValidate : function() {
        }*/
	});

/*-------------end validation-------------------*/	



/*-------------validation-------------------*/
	$.validate({
	  form : '.js_validation_comments',
	  /*onError : function() {
            alert('Validation failed');
        },*/
		onSuccess : function() {
			$('.form_comment_block').fadeOut(300, function(){
				
				$('.comment_sent_text').fadeIn();
				
			});
		   
		   return false;
        }
		
        /*onValidate : function() {
           
               
			
            
        }*/
	});
	

/*-------------end validation-------------------*/	
/*compare page btn arrows click*/
$('.js_compare_left').click(function(e){
		e.preventDefault();	
		var current = api.getContentPositionX();
		api.scrollTo(current-226, 0, 300);		
		


$('.js_compare_right').css('display', 'block');
		
})
$('.js_compare_right').click(function(e){
		e.preventDefault();	
		var current = api.getContentPositionX();
		api.scrollTo(current+226, 0, 300);			


$('.js_compare_left').css('display', 'block');	

})


if($('.inner_compare_right_block').length>0){
if($('.js_scroll_table').outerWidth() + api.getContentPositionX() >= api.getContentWidth()-230)
{
   $('.js_compare_right').css('display', 'none');
}	
else $('.js_compare_right').css('display', 'block');
if(api.getContentPositionX()<230)
{
   $('.js_compare_left').css('display', 'none');
}	
else $('.js_compare_left').css('display', 'block');	
}

if($('.compare_items .item_block').length<=4){
	$('.js_compare_right, .js_compare_left').css('display', 'none');
}


$('.js_scroll_table').bind(
	'jsp-scroll-x',
	function(event, scrollPositionX, isAtTop, isAtBottom)
	{
		if($('.js_scroll_table').outerWidth() + api.getContentPositionX() >= api.getContentWidth()-10)
		{
		   $('.js_compare_right').css('display', 'none');
		}	
		else $('.js_compare_right').css('display', 'block');
		if(api.getContentPositionX()==0)
		{
		   $('.js_compare_left').css('display', 'none');
		}	
		else $('.js_compare_left').css('display', 'block');	
	}
)
/*end compare page btn arrows click*/




$('.delivery_checkbox_block input[type=checkbox]').change(function(){
	var checkbox = $(this);
	var isCheked = $(this).prop('checked');	
	if(isCheked==true){
		$('.checkbox_delivery_block').parent().parent().find('input[type=checkbox]').not(this).prop('checked',false);
		$('.js_final_delivery_price').html(0.00);
	}
	if(isCheked==false){
		$('.checkbox_delivery_block').parent().parent().find('input[type=checkbox]').prop('checked',false);
		checkbox.prop('checked');
	}
	var text = $('.delivery_checkbox_block input[type=checkbox]:checked').parent().find('.delivery_checkbox_hidden_price').html();
	var parent = $('.delivery_checkbox_block input[type=checkbox]:checked').parent().parent().parent();
	parent.find('.js_final_delivery_price').html(text);
	changePriceView();
})


$("select.js_icons_select").each(function() {					
		var sb = new SelectBox({
			selectbox: $(this),
			//height: 150,
			width: 200
		});
	});




$('.js_tooltip_item_property').click(function(e){
		e.preventDefault();	
		$(this).toggleClass('added');
})
$('.js_add_to_list, .js_delete_from_list').click(function(e){
		e.preventDefault();	
		$(this).closest('.js_tooltip_item_property').click();
		$().click();
})
$('.js_tooltip_item_property .tooltip_content .inner').click(function(e){
		e.preventDefault();
		e.stopPropagation();	
})
$('.js_go_to_list').click(function(e){
		e.preventDefault();	
		var href = $(this).attr('data-href');
		window.location.href = href;
})




});