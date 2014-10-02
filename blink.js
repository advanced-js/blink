// YOUR CODE GOES HERE
(function($){
  $.fn.blink = function(blinkInt) {
    var self = this;
    var isBlock = true;

    setInterval(function(){
      if(isBlock === false){
        self.css("display", "block");
        isBlock = true;
      }
        
      else if(isBlock === true){    
        self.css("display", "none");
        isBlock = false;
      }
    }, blinkInt);
  };
} (jQuery));




/*var blink = function(){
  $(".code").toggle();
};
$(document).ready(function() {
  setInterval(blink, 1000);
});*/


/* chaining version - try another time.

$.fn.blinkify = function() {
this.css("color","white");
return this;
};
$(".code").blinkify().addCLass("blinkified");*/