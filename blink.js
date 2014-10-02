$.fn.blink = function(timeout) {
     var obj = this;
    setInterval(function() {
        if(obj.css('opacity') === '0') {
            obj.css('opacity', '1');
        } else {
            obj.css('opacity', '0');
        }
    }, timeout);

};


