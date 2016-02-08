// Write a jQuery plugin that makes an element act like a  <blink>  tag.
// It should work for any arbitrary speed.

// V1
// Make plugin work for selectors that correspond to a single element.

$.fn.blink = function() {
	setInterval(blinkit,1000,this);
};

function blinkit(obj) {
	var value = obj.css('visibility') === 'visible' ? 'hidden' : 'visible';
	obj.css('visibility',value);
}
