// YOUR CODE GOES HERE

(function($) {

  $.fn.blink = function(interval) {
   var thistarget = this; 
   var blinkthis = setInterval(function() { thistarget.toggle(); },interval);
  };

}(jQuery));