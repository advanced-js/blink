(function($) {
	$.fn.blink = function(delay){
		var element = $(this);
		setInterval(function()
		{
			var visibility = element.css("visibility");
			if(visibility == "visible")
				element.css("visibility", "hidden" );
			else
				element.css("visibility", "visible");
		}, delay);
	};
}(jQuery));