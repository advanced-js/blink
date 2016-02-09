// Write a jQuery plugin that makes an element act like a  <blink>  tag.
// It should work for any arbitrary speed.

// V2
// Make plugin work for selectors that correspond to multiple elements.

(function ( $ ) {

	$.fn.blink = function(duration) {
	    return this.each(function() {
	    	setInterval(blinkit,duration,$(this));
	    });
	};

}( jQuery ));

function blinkit(obj) {
	var value = obj.css('visibility') === 'visible' ? 'hidden' : 'visible';
	obj.css('visibility',value);
}


// V1
// Make plugin work for selectors that correspond to a single element.

// (function ( $ ) {

// 	$.fn.blink = function(duration) {
// 		setInterval(blinkit,duration,this);
// 		return this;
// 	};

// }( jQuery ));

// function blinkit(obj) {
// 	var value = obj.css('visibility') === 'visible' ? 'hidden' : 'visible';
// 	obj.css('visibility',value);
// }
