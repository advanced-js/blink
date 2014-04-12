(function($) {
    $.fn.blink = function(interval) {
        var el = this,
        	shown = true,
        	time = interval || 500;
        function toggleblink() {
        	el.css({
		    "visibility": shown ? "hidden" : "visible"
		    });
    
            shown = shown ? false : true;
        };
        setInterval(toggleblink, time);
        return el;
    };
}(jQuery));