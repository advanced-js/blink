(function($) {

    $.fn.blink = function(msec) {
        var $elems = $(this);
        
        setInterval(function(){
          var visibility = $elems.css("visibility");

          if (visibility == "visible"){
            $elems.css("visibility", "hidden");
          } else {
            $elems.css("visibility", "visible");
          };

        }, msec);

        return this;
    };
}(jQuery));
