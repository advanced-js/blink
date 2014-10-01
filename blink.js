(function ($) {
  $.fn.blink = function (secs) {
    var self = this;
    return self.each(function () {
      //store default state as property of function object, if not already defined
      if (self.blinkOn === undefined) {
        self.blinkOn = false;
      }
      setTimeout(function () {
        if (self.blinkOn === true) {
          self.css({'visibility': 'visible'});
          self.blinkOn = false;
        } else {
          self.css({'visibility': 'hidden'});
          self.blinkOn = true;
        }
        self.blink(secs);
      }, secs);
    });
  };
}(jQuery));