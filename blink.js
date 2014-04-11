(function ( $ ) {

	$.fn.blink = function(interval) {

		var me = this,
			visible = true;

		function blinker() {
			me.css({
				'visibility': visible ? 'hidden' : 'visible'
			});

			visible = visible ? false : true;

		}

		setInterval(blinker, interval)

		return me;

	};

}( jQuery ));