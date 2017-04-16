// YOUR CODE GOES HERE
// v1

(function($) {

	$.fn.blink = function(time) {
	  var that = this;
	  // return this.each(function() {

		  setInterval(function() {
		    if (that.css("opacity") === '1') {
		      that.css("opacity", "0");
		    } else {
		      that.css("opacity", "1");
		    }
		    return that;
		  }, time);

	  // });
	};
}(jQuery));


// $("div").blink(1000);