$.fn.blink = function (time) {
	var time = time || 1000; // If no time is specified, default to 1 second
	var that = this;
	setInterval(function() {
		that.toggle();
	}, time);
};