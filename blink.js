// YOUR CODE GOES HERE
(function ( $ ) {

    $.fn.blink = function(delay) {
    	var this_ = this;
    	function blinker() {
	    	this_.fadeOut(delay/2);
	    	this_.fadeIn(delay/2);
	    }
	    setInterval(blinker, delay);
	    return this;    
    };
}( jQuery ));
