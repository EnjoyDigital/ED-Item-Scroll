/**
 * Allows you to show items when they are in the viewport (timeline etc...)
 */
$.fn.edItemScroll = function(options){
	'use strict';
	var settings = $.extend({
		'effect': 'opacity',
		'speed': 400,
		'callback': function(){}
	}, options);

	return this.each(function(){
		var element = $(this);
		
		if(settings.effect == 'opacity'){
			element.css({ opacity: 0 });
		}else if(settings.effect = 'show'){
			element.hide();
		}

		$(window).scroll(function(){
			element.each(function(){
				var rect = $(this)[0].getBoundingClientRect();
				if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width()){
					if(settings.effect == 'opacity'){
						$(this).animate({
							opacity: 1
						}, settings.speed, 'swing', function(){
							if(settings.callback){
								settings.callback.call(this);
							}
						});
					}else if(settings.effect == 'show'){
						$(this).fadeIn(settings.speed, function(){
							if(settings.callback){
								settings.callback.call(this);
							}
						});
					}
				}
			});
		});
	});
};
