$.fn.blink = function(interval) {
	var self = this;

	setInterval( function() {
		if (self.css("visibility") === "visible") {
			self.css("visibility", "hidden");
		} else {
			self.css("visibility", "visible");
		}
	}, interval);
};
