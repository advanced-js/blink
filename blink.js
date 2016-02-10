(function($) {
    $.fn.blink = function(time) {
        this.each(function() {
            var elem = $(this);            
            setInterval(function() {
            	elem.toggle();
            }, time);
        });
        return this;
    };
}(jQuery));