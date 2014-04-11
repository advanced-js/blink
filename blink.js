(function($) {
	$.fn.blink = function(time) {
		var blinkItem = this, see = true;
		function transparent(){
			 $(blinkItem).css('opacity','0');
			 see = false;
		}
		function opaque(){
			 $(blinkItem).css('opacity','100');
			 see = true;
		}
		setInterval(function() {
			if (see === true) {
				transparent();
			} else if (see === false) {
				opaque();
			}
		},time);
	};
}(jQuery));