// YOUR CODE GOES HERE

$.fn.blink = function(blinkSpeed) {

	var _this = this;

	function toggleVisibility() {
		if (_this.css("visibility") === "visible") {
			_this.css("visibility", "hidden");
		}
		else {
			_this.css("visibility", "visible");
		}
	}

	setInterval(toggleVisibility, blinkSpeed);

};
