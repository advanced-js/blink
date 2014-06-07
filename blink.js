(function($){
	$.fn.blink = function(delay){
		// var defaults = {
		// 	delay: 500
		// };
		// options = $.extend(defaults, options);

		return this.each(function(){
			var obj = this;
			setInterval(function(){
				if ($(obj).css('visibility') == 'visible'){
					$(obj).css('visibility', 'hidden');
				}
				else {
					$(obj).css('visibility', 'visible');
				}
			}, delay);
		});
	};
}(jQuery));
