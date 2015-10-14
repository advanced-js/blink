(function ($) {
	$.fn.blink = function(y){
		var x = this;
		setInterval(function() {
      if (x.css('visibility') == 'visible') {
    		x.css('visibility', 'hidden');
    	 }
    	else {
     	 x.css('visibility', 'visible');
    	}
  	}, y);
	};
}( jQuery ));
