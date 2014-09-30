// YOUR CODE GOES HERE
(function($) {

    $.fn.blink = function(seconds) {
    	var view = $(this);
    	setTimeout(function() {
	    	if(view.css('opacity') === '0') {
	    		view.css('opacity', '1');
	    	} else {
	    		view.css('opacity', '0');
	    	}
    		view.blink(seconds);
    	}, seconds);
    };

}(jQuery));