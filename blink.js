(function ( $ ) {
    $.fn.blink = function(delay) {
        var that = this;
        setInterval(function() {
          if (that.css('visibility') === 'visible') {
            that.css('visibility', 'hidden');
          } else {
            that.css('visibility', 'visible');
          }
      }, delay);
    };
}( jQuery ));
