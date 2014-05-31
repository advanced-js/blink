$.fn.blink = function (time) {
	var that = this;
	setInterval(function() {
		that.toggle();
	}, time);
};