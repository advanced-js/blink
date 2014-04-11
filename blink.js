(function( $ ) { 
	$.fn.blink = function( options ) {
		var self = this,
			isVisible = true,
			timer = options || 500;

		//Private function to toggle visibility of $ object
		function toggleVisibility(){
			//set visibility property
			self.css({
				"visibility": isVisible ? "hidden" : ""
			});
			//set isVisible to keep track of status
			isVisible = isVisible ? false : true;
		};

		//Run toggleVisibility every XX number of milliseconds
		setInterval(toggleVisibility, timer);

		return self;
	};
 
}( jQuery ));