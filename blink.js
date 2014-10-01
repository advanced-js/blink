(function($){

	$.fn.blink = function(interval){
	  visible = true;
	  self = this

        setInterval(function(){

          if(visible === true){
            self.css("display", "none");
            visible = false;
          }
          else if(visible === false){
            self.css("display", "block");
            visible = true;
          }

        }, interval);

	};

}(jQuery));
