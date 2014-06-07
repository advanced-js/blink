$.fn.blink = function(msec) {
	var obj = this;
	setInterval(function() {
		if ($(obj).css('display') == 'none') {
			$(obj).css('display', 'block');
		}
		else {
			$(obj).css('display', 'none');
		}
	}, msec);
	return;
};

// Inspired by http://jsfiddle.net/Sk8erPeter/Yca4Z/