// v1 blink jQuery plugin 
// J Buican Oct-10-2015
// Exercise 1 blink 
(function($) {
  'use strict';
  $.fn.blink = function(num1) {
    var delay = parseInt(num1);

    this.each(function() {
      if (delay && delay > 0) {
        delay /= 2;
        var _this = this;
        _this.style.visibility = 'visible';
        var setTimer = setInterval(function() {
          if (_this.style.visibility == 'visible') {
            _this.style.visibility = 'hidden';
          } else {
            _this.style.visibility = 'visible';
          }
        }, delay);
      } else {
      }
    });
  }
}(jQuery));