(function($) {

	$.fn.blink = function(interval) {

		var flash = function(that) {
			setInterval(function(){
				var display = that.style.visibility;
				if(display == 'visible' || display == '') {
					that.style.visibility = 'hidden';
				} else {
					that.style.visibility = 'visible';
				}
			}, interval);
		}

		return this.each(function() {
			flash(this);
		});
	};

}(jQuery));