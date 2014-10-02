
  (function( $ ) {
    
    $.fn.blink = function(speed) {
      var element = this;

      setInterval(function() {
        if (element.css('visibility') == 'visible') {
          $(element).css('visibility', 'hidden');
        } else {
          visible();
        }
      }, speed);

      var visible = function() {
        $(element).css('visibility', 'visible');
      };

      return this;
    };
  
  }( jQuery ));
