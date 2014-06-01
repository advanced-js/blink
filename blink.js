(function ( $ ) {

	$.fn.blink = function(seconds) {
		var that = this;
		var i=0;
		var clearIntervalID = setInterval(function() {
			that.css( "visibility", (++i%2===0) ? "visible" : "hidden" );
		},seconds);
		return this;
	};
	
}( jQuery ));

