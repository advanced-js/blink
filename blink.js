// YOUR CODE GOES HERE
$.fn.blink = function(time) {
    time = time || 1000;
    var obj = $(this);

    var i = 0;
    setInterval(function() {
        if (i === 0) {
            obj.fadeOut(0);
            i = 1;
        } else {
            obj.fadeIn(0);
            i = 0;
        }
    }, time);

    return this;
};