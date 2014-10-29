(function($){
	var visible, self;

	$.fn.blink = function(interval){
	  visible = true;
	  self = this

        setInterval(function(){

          if(visible === true){
            self.css("opacity", "0");
            visible = false;
          }
          else{
            self.css("opacity", "1");
            visible = true;
          }

        }, interval);

	};

}(jQuery));
