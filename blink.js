$.fn.blink = function(duration) {
    $(this).css({
    	"animation" : "blinker " + duration/1000 + "s linear infinite"
    });
};

