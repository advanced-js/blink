// WORKS FOR SOLUTION V1 AND SOLUTION V2

$.fn.blink = function (x) {
	var target = this;
	var intervalID = setInterval(startBlink, x);
	function startBlink() {
		target.animate({
			opacity: 0},
			50);
		target.animate({
			opacity: 100},
			50);
		return target;
	}
	// var timeoutID = setTimeout(function() {clearInterval(intervalID)}, [6000]);
};