(function($) {

    $.fn.blink = function(msec) {
        var elems = this;
        
        setInterval(function(){
          elems.toggle();
        }, msec);

        return this;
    };
}(jQuery));
